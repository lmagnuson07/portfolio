
let navItems = document.querySelectorAll(".nav-item");
let socialItems = document.querySelectorAll(".socials-item");

let headerNav = document.querySelector("nav.header-nav");
let dropdown = document.querySelector(".dropdown");

// hamburger menu
document.querySelector(".toggle label").addEventListener("click", () => {
    headerNav.classList.toggle("toggle-nav");
    dropdown.classList.toggle("toggle-dropdown-height");

    setTimeout(() => {
        for (let item of navItems) {
            item.classList.toggle("toggle-visibility");
        }
    }, 150);
    setTimeout(() => {
        for (let item of socialItems) {
            item.classList.toggle("toggle-visibility");
        }
    }, 300);
    
    for (let item of navItems) {
       item.classList.toggle("toggle-nav-height"); 
    }
    if (dropdown.classList.contains("toggle-visibility")){
        dropdown.classList.remove("toggle-visibility");
    }
});

// arrow beside My Work
document.querySelector("#dropdownToggle").addEventListener("click", () => {
    dropdown.classList.toggle("toggle-visibility");
});

dropdown.addEventListener("mouseleave", () => {
    if (dropdown.classList.contains("toggle-visibility")) {
        dropdown.classList.remove("toggle-visibility");
    }
});


// let navItems = document.querySelectorAll(".nav-item");
// let socialItems = document.querySelectorAll(".socials-item");

// document.querySelector(".toggle label").addEventListener("click", () => {
//     document.querySelector("nav.header-nav").classList.toggle("toggle-nav");
//     document.querySelector(".dropdown").classList.toggle("toggle-dropdown-height");
//     for (let item of socialItems) {
//         item.classList.toggle("toggle-dropdown");
//     }
//     for (let item of navItems) {
//        item.classList.toggle("toggle-nav-height"); 
//     }
// });

// document.querySelector("#dropdownToggle").addEventListener("click", () => {
//     document.querySelector(".dropdown").classList.toggle("toggle-dropdown");
// });

// let dropdown = document.querySelector(".dropdown");
// dropdown.addEventListener("mouseleave", () => {
//     if (dropdown.classList.contains("toggle-dropdown")) {
//         dropdown.classList.remove("toggle-dropdown");
//     }
// });
