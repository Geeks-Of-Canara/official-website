function load(url,method,callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            callback(this.responseText);
       }
    };
    xhttp.open(method, url, true);
    xhttp.send();
  }
  
load("https://sandesh-backend.vercel.app/","get",(value)=>{
list = JSON.parse(value);
var cardContainer = document.querySelector(".card-container");
var cards = "";
list.forEach(element => {
    cards+=`<div class="card"> <div class="card-img-cover"> <img src=${element.posterImg} alt="image_image" /> </div> <div class="event-content"> <h3 class="event_title">${element.title}</h3> <p class="event_content">${element.description}</p> <button class="visit-button" data-id=${element.id} onclick="toggleModal(event)"> <p>View more</p> </button> </div> </div>`
});
cardContainer.innerHTML=cards;
})