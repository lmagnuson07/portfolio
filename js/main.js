

document.querySelector(".toggle label").addEventListener("click", () => {
    document.querySelector("ul.main-nav").classList.toggle("show-nav");
    document.querySelector("ul.socials").classList.toggle("show-nav");
    document.querySelector("main").classList.toggle("display-none");
    document.querySelector("footer").classList.toggle("display-none");
    document.querySelector("header").classList.toggle("body-height-max");
    document.querySelector(".header-container").classList.toggle("grid-template");
});