alert("Welcome to Resume Builder!");
// get reference to the form and display area
var formElement = document.getElementById('resume-form');
var resume_DisplayElement = document.getElementById('resume-display');
// handle form submission
formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "<h2> Resume</h2>\n     <h3> Personal Information</h3>\n// <p><strong> Name:</strong> ".concat(name, " </p>\n// <p><strong> Email:</strong> ").concat(email, " </p>\n// <p><strong> Phone:</strong> ").concat(phone, " </p>\n\n// <h3> Education</h3>\n// <p> ").concat(education, "</p>\n\n// <h3> Experience</h3>\n// <p> ").concat(experience, "</p>\n\n// <h3> skills</h3>\n// <p> ").concat(skills, "</p>");
    //display the generated resume
    if (resume_DisplayElement) {
        resume_DisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
