
let navItems = document.querySelectorAll(".nav-item");
let socialItems = document.querySelectorAll(".socials-item");

document.querySelector(".toggle label").addEventListener("click", () => {
    document.querySelector("nav.header-nav").classList.toggle("toggle-nav");
    document.querySelector(".dropdown").classList.toggle("toggle-dropdown-height");
    for (let item of socialItems) {
        item.classList.toggle("toggle-dropdown");
    }
    for (let item of navItems) {
       item.classList.toggle("toggle-nav-height"); 
    }
});

document.querySelector("#dropdownToggle").addEventListener("click", () => {
    document.querySelector(".dropdown").classList.toggle("toggle-dropdown");
});

let dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("mouseleave", () => {
    if (dropdown.classList.contains("toggle-dropdown")) {
        dropdown.classList.remove("toggle-dropdown");
    }
});
