let counter = 0;

document.querySelector(".toggle label").addEventListener("click", () => {
    document.querySelector("ul.main-nav").classList.toggle("show-nav");
    document.querySelector("ul.socials").classList.toggle("show-nav");
    document.querySelector("main").classList.toggle("display-none");
    document.querySelector("footer").classList.toggle("display-none");
    document.querySelector("header").classList.toggle("body-height-max");
    document.querySelector(".header-container").classList.toggle("grid-template");
    counter = 0;
});

let dropDown = document.querySelector(".dropdown");
let navItem = document.querySelector("#firstNavItem");

navItem.addEventListener("mouseenter", () => {
    dropDown.classList.add("display-block");

    dropDown.addEventListener("mouseenter", () => {
        dropDown.classList.add("display-block");
    });
});

navItem.addEventListener("mouseleave", () => {
    if (dropDown.classList.contains("display-block")){
        dropDown.classList.remove("display-block");
    }

    dropDown.addEventListener("mouseleave", () => {
        if (dropDown.classList.contains("display-block")){
            dropDown.classList.remove("display-block");
        }
    });
});

// The counter and if statement fix a bug where you had to click twice the first time to display the dropdown
document.querySelector("#dropdownToggle").addEventListener("click", () => {
    if (counter > 0) {
        dropDown.classList.toggle("display-block");
    } else {
        dropDown.classList.add("display-block");
    }
    counter++;
});

