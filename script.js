const homeButton = document.getElementById("home-btn");
const aboutButton = document.getElementById("about-btn");
const projectsButton = document.getElementById("projects-btn");
const workButton = document.getElementById("work-btn");
const volButton = document.getElementById("vol-btn");
const moreButton = document.getElementById("more-btn");
const contactButton = document.getElementById("contact-btn");

homeButton.addEventListener('click', () => {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    projectsButton.classList.remove("active");
    workButton.classList.remove("active");
    volButton.classList.remove("active");
    moreButton.classList.remove("active");
    contactButton.classList.remove("active");
    homeButton.classList.add("active");
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
})