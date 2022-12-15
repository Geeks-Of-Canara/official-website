//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.8;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

document.querySelector('.inaugurate').addEventListener('click', function(){
  document.querySelector('.in_container svg').style.display = 'block';
  document.querySelector('.in_container .inaugurate').style.display = 'none';
  (function update() {

    field
      .each(function(d) {
        d.previous = d.value, d.value = d.update(timePassed);
      });
  
    path.transition()
      .ease("elastic")
      .duration(500)
      .attrTween("d", arcTween);
  
    if ((timeLimit - timePassed) <= 10)
      pulseText();
    else
      label
      .text(function(d) {
        return d.size - d.value;
      });
  
    if (timePassed <= timeLimit)
      setTimeout(update, 1000 - (timePassed % 1000));
    else
      destroyTimer();
  
  })();
})

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetto
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });


  window.requestAnimationFrame(render);
};

//---------Execution--------


//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});



var width = 550,
  height = 400,
  timePassed = 0,
  timeLimit = 1;

var fields = [{
  value: timeLimit,
  size: timeLimit,
  update: function() {
    return timePassed = timePassed + 1;
  }
}];

var nilArc = d3.svg.arc()
  .innerRadius(width / 3 - 133)
  .outerRadius(width / 3 - 133)
  .startAngle(0)
  .endAngle(2 * Math.PI);

var arc = d3.svg.arc()
  .innerRadius(width / 3 - 55)
  .outerRadius(width / 3 - 25)
  .startAngle(0)
  .endAngle(function(d) {
    return ((d.value / d.size) * 2 * Math.PI);
  });

var svg = d3.select(".in_container").append("svg")
  .attr("width", width)
  .attr("height", height);

var field = svg.selectAll(".field")
  .data(fields)
  .enter().append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .attr("class", "field");

var back = field.append("path")
  .attr("class", "path path--background")
  .attr("d", arc);

var path = field.append("path")
  .attr("class", "path path--foreground");

var label = field.append("text")
  .attr("class", "label")
  .attr("dy", ".35em");

  label.text("Geeks Of Canara")


function pulseText() {
  back.classed("pulse", true);
  label.classed("pulse", true);

  if ((timeLimit - timePassed) >= 0) {
    label.style("font-size", "120px")
      .attr("transform", "translate(0," + +4 + ")")
      .text(function(d) {
        return d.size - d.value;
      });
  }

  label.transition()
    .ease("elastic")
    .duration(900)
    .style("font-size", "90px")
    .attr("transform", "translate(0," + -10 + ")");
}

function destroyTimer() {
  label.transition()
  .ease("back")
  .duration(700)
  .style("opacity", "0")
  .style("font-size", "5")
  .attr("transform", "translate(0," + -40 + ")")
    .each("end", function() {
      field.selectAll("text").remove()
    });
    
    path.transition()
    .ease("back")
    .duration(700)
    .attr("d", nilArc);
    
    back.transition()
    .ease("back")
    .duration(700)
    .attr("d", nilArc)
    .each("end", function() {
      field.selectAll("path").remove()
    });
    setTimeout(function(){
        document.querySelector('.confetti').style.display = 'none';
    },4000)
    document.querySelector('.inauguration-main').style.display = 'none';
    initConfetti();
    render();
}

function arcTween(b) {
  var i = d3.interpolate({
    value: b.previous
  }, b);
  return function(t) {
    return arc(i(t));
  };
}