var student = document.querySelector('.inner_text');
var faculty = document.getElementById('Faculty');
var student_data = document.getElementById('container-1')
var faculty_data = document.getElementById('container-2')
student.addEventListener("click", function() {
    student.classList.add("active");
    student_data.classList.add('active');
    faculty_data.classList.remove('active');
    faculty.classList.remove("active");
});

faculty.addEventListener("click", function() {
    faculty.classList.add("active");
    faculty_data.classList.add('active');
    student_data.classList.remove('active');
    student.classList.remove("active");

});