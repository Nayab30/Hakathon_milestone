
alert("Welcome to Resume Builder!")
// get reference to the form and display area

const formElement = document.getElementById('resume-form') as HTMLFormElement;

const resume_DisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// handle form submission
formElement.addEventListener('submit',(event: Event)=> {
    event.preventDefault();


    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;

    const email = (document.getElementById('email') as HTMLInputElement).value;

    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    const education = (document.getElementById('education') as HTMLInputElement).value;

    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // generate the resume content dynamically

    const resumeHTML =
     `<h2> Resume</h2>
     <h3> Personal Information</h3>
// <p><strong> Name:</strong> ${name} </p>
// <p><strong> Email:</strong> ${email} </p>
// <p><strong> Phone:</strong> ${phone} </p>

// <h3> Education</h3>
// <p> ${education}</p>

// <h3> Experience</h3>
// <p> ${experience}</p>

// <h3> skills</h3>
// <p> ${skills}</p>`

//display the generated resume

if (resume_DisplayElement){
    resume_DisplayElement.innerHTML = resumeHTML;
}else{
    console.error('The resume display element is missing')
}

})








