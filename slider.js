const modal = document.querySelector(".modal-container");
const trigger = document.querySelectorAll(".visit-button");
const closeButton = document.querySelector(".close-button");

const eventDate = document.querySelector('#event-data-date')
const eventTitle = document.querySelector('#event-data-title')
const eventDesc = document.querySelector('#event-data-description')
const eventClub = document.querySelector('#event-data-club')
const eventRp = document.querySelector('#event-data-rp')
const slideImage = document.querySelector('.slide-img')

function toggleModal(e) {
    var id = e.currentTarget.getAttribute("data-id");
    if(id)
        load(`https://muvdb.tk/event/${id}`,"get",(data)=>{
            data = JSON.parse(data).event
            eventDate.textContent = new Date(data.date).toLocaleDateString();
            eventTitle.textContent = data.title;
            eventDesc.textContent = data.description;
            eventClub.textContent = data.club;
            eventRp.textContent = data.organizer;
            slideImage.src = data.posterImg;
            modal.classList.toggle("show-modal-container");
        })
    else{
        modal.classList.toggle("show-modal-container");
    }
        
}
// const flag=false;

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal(event);
//         // flag=!flag;
//     }
// }

// trigger.forEach(t=>{
//     t.addEventListener("click", (e)=>toggleModal(e));

// })
closeButton.addEventListener("click", (e)=>toggleModal(e));
// if(modal.classList=="show-modal"){
//     body.addEventListener("click", toggleModal);
// }
// body.addEventListener("click", toggleModal);
// window.addEventListener("click", (windowOnClick));


// document.addEventListener( 'DOMContentLoaded', function() {
//     var splide = new Splide( '.splide', {
//     type    : 'loop',
//     perPage : 1,
//     autoplay: true,
//     } );
//   splide.mount();
// } );