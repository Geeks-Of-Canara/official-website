const modal = document.querySelector(".modal-container");
const trigger = document.querySelectorAll(".visit-button");

const closeButton = document.querySelector(".close-button");

function toggleModal(e) {
    console.log(e.currentTarget.getAttribute('data-id'))
    modal.classList.toggle("show-modal-container");
}
// const flag=false;

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal(event);
//         // flag=!flag;
//     }
// }
trigger.forEach(t=>{
    t.addEventListener("click", (e)=>toggleModal(e));

})
closeButton.addEventListener("click", (e)=>toggleModal(e));
// if(modal.classList=="show-modal"){
//     body.addEventListener("click", toggleModal);
// }
// body.addEventListener("click", toggleModal);
// window.addEventListener("click", (windowOnClick));


document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 1,
    autoplay: true,
    } );
  splide.mount();
} );