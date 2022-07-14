
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

const validate = function () {
    let result = true;
    let nameLabel = document.querySelector("[for=name-input]");
    let emailLabel = document.querySelector("[for=email-input]");
    let messageLabel = document.querySelector("[for=message-input]");

    let errorMessages = document.querySelectorAll(".contact-error-message");
    let counter = 0;
    
    if (nameLabel.contains(errorMessages[counter])){
        document.querySelector("[for=name-input] span.contact-error-message").remove();
        counter++;
    }
    if (!document.contact.name.value) {
        document.contact.name.classList.add("alert");
        nameLabel.innerHTML += "<span class=\"contact-error-message\">Please enter your name in the field below...</span>";
        result = false;
    } else {
        if (document.contact.name.classList.contains("alert")){
            document.contact.name.classList.remove("alert");
        }
    }

    if (emailLabel.contains(errorMessages[counter])){
        document.querySelector("[for=email-input] span.contact-error-message").remove();
        counter++;
    }
    if (!document.contact.email.value) {
        document.contact.email.classList.add("alert");
        emailLabel.innerHTML += "<span class=\"contact-error-message\">Please enter your email address in the field below...</span>";
        result = false;
    } else {
        if (document.contact.email.classList.contains("alert")){
            document.contact.email.classList.remove("alert");
        }
    }

    if (messageLabel.contains(errorMessages[counter])){
        document.querySelector("[for=message-input] span.contact-error-message").remove();
        counter++;
    }
    if (!document.contact.message.value) {
        document.contact.message.classList.add("alert-textarea");
        messageLabel.innerHTML += "<span class=\"contact-error-message\">Please enter your message (at least 5 characters) in the field below...</span>";
        result = false;
    } else {
        if (document.contact.message.classList.contains("alert-textarea")){
            document.contact.message.classList.remove("alert-textarea");
        }
    }
    return result;
}

document.querySelectorAll("input").forEach((input => {
    input.addEventListener("focus", function () {
        input.classList.add("valid");
    });
}));

document.querySelectorAll("input").forEach((input => {
    input.addEventListener("blur", function () {
        if (input.classList.contains("valid")){
            input.classList.remove("valid");
        }
        if (input.classList.contains("alert")){
            if (input.value.length > 0) {
                input.classList.remove("alert");
            }
        }
    });
}));

document.querySelector("#name-input").addEventListener("blur", function (evt) {
    if (!evt.target.value){
        evt.target.classList.add("alert");
    }
});

document.querySelector("#email-input").addEventListener("blur", function (evt) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(evt.target.value)) {
        evt.target.classList.add("alert");
    }
});

document.querySelector("textarea").addEventListener("focus", function (evt) {
    evt.target.classList.add("valid");
});

document.querySelector("#message-input").addEventListener("blur", function (evt) {
    if (evt.target.classList.contains("valid")){
        evt.target.classList.remove("valid");
    }
    if (evt.target.value.length > 5) {
        if (evt.target.classList.contains("alert-textarea")){
            evt.target.classList.remove("alert-textarea");
        }
    }
    else {
        evt.target.classList.add("alert-textarea");
    }
});