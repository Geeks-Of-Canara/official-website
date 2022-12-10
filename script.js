var type2 = document.getElementById("type2");
var typewriter = new Typewriter(type2, {
  loop: true,
});

typewriter.typeString("Geeks Of Canara").pauseFor(2500)
.deleteAll()
.typeString('Geeks Of Canara')
.pauseFor(2500)
.deleteAll()
.typeString('Geeks Of Canara')
.pauseFor(2500)
.start();

var btn1 = document.querySelector("#club_btn_1");
var btn2 = document.querySelector("#club_btn_2");
var btn3 = document.querySelector("#club_btn_3");
var btn4 = document.querySelector("#club_btn_4");
var active = btn1;


var items = [btn1, btn2, btn3, btn4];
var i = 1;
var interval = setInterval(() => {
  if (i == items.length) {
    items[0].click();
    i = 1;
  } else {
    items[i].click();
    i++;
  }
}, 5000);

var cards = document.querySelectorAll('.our_club .card')

const changeContent = function(id){
    id = parseInt(id)-1
    cards[id].style.display = 'flex';
    for(var i=0; i<cards.length; i++){
        if(i!=id){
            cards[i].style.display = 'none';
            
        }
    }
}


btn1.addEventListener("click", (e) => {
  active.classList.remove("active");
  btn1.classList.add("active");
  active = btn1;
  changeContent(e.currentTarget.getAttribute("data-id"));
  if (e.isTrusted) {
    clearInterval(interval);
  }
});
btn2.addEventListener("click", (e) => {
  active.classList.remove("active");
  btn2.classList.add("active");
  active = btn2;
  changeContent(e.currentTarget.getAttribute("data-id"));
  if (e.isTrusted) {
    clearInterval(interval);
  }
});
btn3.addEventListener("click", (e) => {
  active.classList.remove("active");
  btn3.classList.add("active");
  active = btn3;
  changeContent(e.currentTarget.getAttribute("data-id"));
  if (e.isTrusted) {
    clearInterval(interval);
  }
});
btn4.addEventListener("click", (e) => {
  active.classList.remove("active");
  btn4.classList.add("active");
  active = btn4;
  changeContent(e.currentTarget.getAttribute("data-id"));
  if (e.isTrusted) {
    clearInterval(interval);
  }
});
