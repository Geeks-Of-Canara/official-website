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


var toggler = document.querySelector(".navbar-toggler")

var navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(nav=>{
  nav.addEventListener("click",()=>{
    console.log("clicked")
    toggler.click();
  })
})

// Contact us - Form validation
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');
var submit=document.getElementById('submit');

function validateName(){
  var name = document.getElementById('name').value;
  
  if(name.length==0){
    nameError.innerHTML="Name field required !";
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*/) || name.length<3){
    nameError.innerHTML="Enter full name !";
    return false;
  }
  nameError.innerHTML="";
  submit.disabled=false;
  submitError.innerHTML= "";
  return true;
} 

function validateEmail(){
  var email=document.getElementById('email').value;

  if(email.length==0){
    emailError.innerHTML="Email field required !";
    return false;
  }
  if(!email.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)){
    emailError.innerHTML="Invalid email !";
    return false;
  }
  emailError.innerHTML="";
  submit.disabled=false;
  submitError.innerHTML= "";
  return true;
}

function validateSubject(){
  var subject=document.getElementById('subject').value;

  if(subject.length==0){
    subjectError.innerHTML="Subject field required !";
    return false;
  }
  if(subject.match(/^[A-Za-z0-9]*\s{1}[A-Za-z0-9]*$/)){
    subjectError.innerHTML="Invalid subject !";
    return false;
  }
  subjectError.innerHTML="";
  submit.disabled=false;
  submitError.innerHTML= "";
  return true;
}

function validateMessage(){
  var message=document.getElementById('message').value;
  var required=30;
  var remaining=required - message.length;
  
  if(message.length==0){
    messageError.innerHTML="Message field required !";
    return false;
  }
  if(remaining>0){
    messageError.innerHTML= remaining+" more characters required !";
    return false;
  }
  messageError.innerHTML="";
  submit.disabled=false;
  submitError.innerHTML= "";
  return true;
}

function validateForm(e){
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  subjectError.innerHTML = "";
  messageError.innerHTML = "";
  flag=false;

  if(validateName()||validateEmail()||validateSubject()||validateMessage()){
    submitError.innerHTML= "";
    flag=true;
  }
  else if(!validateName()||!validateEmail()||!validateSubject()||!validateMessage()){
    submitError.innerHTML= " Please fill in the required fields";
    if(!validateName()){
      nameError.innerHTML="Name field required !";
      submitError.innerHTML= " Please fill in the required fields";
    }
    if(!validateEmail()){
      emailError.innerHTML="Email field required !";
      submitError.innerHTML= " Please fill in the required fields";
    }
    if(!validateSubject()){
      subjectError.innerHTML="Subject field required !";
      submitError.innerHTML= " Please fill in the required fields";
    }
    if(!validateMessage()){
      messageError.innerHTML="Message field required !";
      submitError.innerHTML= " Please fill in the required fields";
    }
  }

  return flag;
}


var view_more_coding = document.getElementsByClassName("vmcard");
var vmc = document.getElementsByClassName("view-more");
var vmclose = document.getElementsByClassName("vmclose");

vmc[0].addEventListener("click", () => {
  view_more_coding[0].style.display = "flex";
});

vmc[1].addEventListener("click", () => {
  view_more_coding[1].style.display = "flex";
});

vmc[2].addEventListener("click", () => {
  view_more_coding[2].style.display = "flex";
});

vmc[3].addEventListener("click", () => {
  view_more_coding[3].style.display = "flex";
});

vmclose[0].addEventListener("click", () => {
view_more_coding[0].style.display = "none";
});

vmclose[1].addEventListener("click", () => {
  view_more_coding[1].style.display = "none";
  });

  vmclose[2].addEventListener("click", () => {
    view_more_coding[2].style.display = "none";
    });
  
    vmclose[3].addEventListener("click", () => {
      view_more_coding[3].style.display = "none";
      });