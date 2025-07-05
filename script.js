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

homeButton.addEventListener('click', () => {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    projectsButton.classList.remove("active");
    workButton.classList.remove("active");
    volButton.classList.remove("active");
    moreButton.classList.remove("active");
    contactButton.classList.remove("active");
    homeButton.classList.add("active");

    homeSec.classList.remove("active");
    aboutSec.classList.remove("active");
    projectsSec.classList.remove("active");
    workSec.classList.remove("active");
    volSec.classList.remove("active");
    moreSec.classList.remove("active");
    contactSec.classList.remove("active");
    homeSec.classList.add("active");
})
aboutButton.addEventListener('click', () => {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    projectsButton.classList.remove("active");
    workButton.classList.remove("active");
    volButton.classList.remove("active");
    moreButton.classList.remove("active");
    contactButton.classList.remove("active");
    aboutButton.classList.add("active");

    homeSec.classList.remove("active");
    aboutSec.classList.remove("active");
    projectsSec.classList.remove("active");
    workSec.classList.remove("active");
    volSec.classList.remove("active");
    moreSec.classList.remove("active");
    contactSec.classList.remove("active");
    aboutSec.classList.add("active");
})
projectsButton.addEventListener('click', () => {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    projectsButton.classList.remove("active");
    workButton.classList.remove("active");
    volButton.classList.remove("active");
    moreButton.classList.remove("active");
    contactButton.classList.remove("active");
    projectsButton.classList.add("active");

    homeSec.classList.remove("active");
    aboutSec.classList.remove("active");
    projectsSec.classList.remove("active");
    workSec.classList.remove("active");
    volSec.classList.remove("active");
    moreSec.classList.remove("active");
    contactSec.classList.remove("active");
    projectsSec.classList.add("active");
})
workButton.addEventListener('click', () => {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    projectsButton.classList.remove("active");
    workButton.classList.remove("active");
    volButton.classList.remove("active");
    moreButton.classList.remove("active");
    contactButton.classList.remove("active");
    workButton.classList.add("active");

    homeSec.classList.remove("active");
    aboutSec.classList.remove("active");
    projectsSec.classList.remove("active");
    workSec.classList.remove("active");
    volSec.classList.remove("active");
    moreSec.classList.remove("active");
    contactSec.classList.remove("active");
    workSec.classList.add("active");
})
volButton.addEventListener('click', () => {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    projectsButton.classList.remove("active");
    workButton.classList.remove("active");
    volButton.classList.remove("active");
    moreButton.classList.remove("active");
    contactButton.classList.remove("active");
    volButton.classList.add("active");

    homeSec.classList.remove("active");
    aboutSec.classList.remove("active");
    projectsSec.classList.remove("active");
    workSec.classList.remove("active");
    volSec.classList.remove("active");
    moreSec.classList.remove("active");
    contactSec.classList.remove("active");
    volSec.classList.add("active");
})
moreButton.addEventListener('click', () => {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    projectsButton.classList.remove("active");
    workButton.classList.remove("active");
    volButton.classList.remove("active");
    moreButton.classList.remove("active");
    contactButton.classList.remove("active");
    moreButton.classList.add("active");

    homeSec.classList.remove("active");
    aboutSec.classList.remove("active");
    projectsSec.classList.remove("active");
    workSec.classList.remove("active");
    volSec.classList.remove("active");
    moreSec.classList.remove("active");
    contactSec.classList.remove("active");
    moreSec.classList.add("active");
})
contactButton.addEventListener('click', () => {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    projectsButton.classList.remove("active");
    workButton.classList.remove("active");
    volButton.classList.remove("active");
    moreButton.classList.remove("active");
    contactButton.classList.remove("active");
    contactButton.classList.add("active");

    homeSec.classList.remove("active");
    aboutSec.classList.remove("active");
    projectsSec.classList.remove("active");
    workSec.classList.remove("active");
    volSec.classList.remove("active");
    moreSec.classList.remove("active");
    contactSec.classList.remove("active");
    contactSec.classList.add("active");
})