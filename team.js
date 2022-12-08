var student = document.querySelector('.inner_text');
var faculty = document.getElementById('Faculty');

student.addEventListener("click", function() {
    student.classList.toggle("active");
    faculty.classList.toggle("active");
});

faculty.addEventListener("click", function() {
    faculty.classList.toggle("active");
    student.classList.remove("active");

});