const homeButton = document.getElementById("home-btn");
const aboutButton = document.getElementById("about-btn");
const projectsButton = document.getElementById("projects-btn");
const workButton = document.getElementById("work-btn");
const volButton = document.getElementById("vol-btn");
const moreButton = document.getElementById("more-btn");
const contactButton = document.getElementById("contact-btn");

const homeSec = document.getElementById("home");
const aboutSec = document.getElementById("about");
const projectsSec = document.getElementById("projects");
const workSec = document.getElementById("work");
const volSec = document.getElementById("volunteer");
const moreSec = document.getElementById("more");
const contactSec = document.getElementById("contact");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const msgInput = document.getElementById("message");
const contactSubmitButton = document.getElementById("contact-submit-btn");

const buttons = {
    home: homeButton,
    about: aboutButton,
    projects: projectsButton,
    work: workButton,
    volunteer: volButton,
    more: moreButton,
    contact: contactButton
};
const sections = {
    home: homeSec,
    about: aboutSec,
    projects: projectsSec,
    work: workSec,
    volunteer: volSec,
    more: moreSec,
    contact: contactSec
};

//////////////////////////////////////////////////////////////
//----------------------------------------------------------//
//////////////////////////////////////////////////////////////

emailjs.init({ publicKey: "PmaH2bNkkVrF-CkuY", });

// VAR.S
const nameMsg = nameInput.value;
const emailMsg = emailInput.value;
const phoneMsg = phoneInput.value;
const subjectMsg = subjectInput.value;
const contentMsg = msgInput.value;

// LISTENERS
window.addEventListener("DOMContentLoaded", () => {
    const activePage = localStorage.getItem("activePage") || "home";

    Object.values(buttons).forEach(button => button.classList.remove("active"));
    Object.values(sections).forEach(section => section.classList.remove("active"));

    buttons[activePage].classList.add("active");
    sections[activePage].classList.add("active");
});

homeButton.addEventListener('click', () => { setActivePage("home"); });
aboutButton.addEventListener('click', () => { setActivePage("about"); });
projectsButton.addEventListener('click', () => { setActivePage("projects"); });
workButton.addEventListener('click', () => { setActivePage("work"); });
volButton.addEventListener('click', () => { setActivePage("volunteer"); });
moreButton.addEventListener('click', () => { setActivePage("more"); });
contactButton.addEventListener('click', () => { setActivePage("contact"); });

contactSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();

    sendMsg(nameMsg, emailMsg, phoneMsg, subjectMsg, contentMsg);
});

// FUNC.S
function setActivePage(page) {
    localStorage.setItem("activePage", page);

    Object.values(buttons).forEach(button => button.classList.remove("active"));
    Object.values(sections).forEach(section => section.classList.remove("active"));

    buttons[page].classList.add("active");
    sections[page].classList.add("active");
}

function sendMsg(nameMsg, emailMsg, phoneMsg, subjectMsg, contentMsg) {
    const serviceID = "service_zsw7tz5";
    const templateID = "template_29lnrq9";

    const templateParams = {
        name: nameMsg,
        email: emailMsg,
        phone: phoneMsg,
        subject: subjectMsg,
        message: contentMsg
    };

    emailjs.send(serviceID, templateID, templateParams)
    .then(response => {
        alert("Message sent successfully!");
    })
    .catch(error => {
        alert("Unable to send message.\n" + error.text);
    });
}