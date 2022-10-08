const menuItems = document.querySelectorAll(".menu-item");

//message
const messageNotification = document.querySelector("#message-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

// font
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

// color pallete
const colorPalette = document.querySelectorAll(".choose-color span");
// background
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// ====================================================

const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
        }
    });
});

// Messages

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach((typed) => {
        let name = typed.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            typed.style.display = "flex";
        } else {
            typed.style.display = "none";
        }
    });
};

messageSearch.addEventListener("keyup", searchMessage);

messageNotification.addEventListener("click", () => {
    messages.style.boxShadow = " 0 0 1rem var(--color-primary)";
    messageNotification.querySelector(".notification-count").style.display =
        "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2500);
});

//  THEME CUSTOMIZATION

const openThemeModal = () => {
    themeModal.style.display = "grid"; // func upar evnt niche
};

const closeThemeModal = () => {
    themeModal.style.display = "none"; // func upar evnt niche
};

function outsideClick(e) {
    if (e.target == themeModal) {
        closeThemeModal();
    }
}

theme.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);
window.addEventListener("click", outsideClick);

// FONT SIZES ===

const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active");
    });
};

fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");

        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left", "-5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left", "-10rem");
            root.style.setProperty("--sticky-top-right", "-33rem");
        }
        // benefit of using rem units size will affect alll
        document.querySelector("html").style.fontSize = fontSize;
    });
});

const changeActiveColorClass = () => {
    colorPalette.forEach((currentColor) => {
        currentColor.classList.remove("active");
    });
};

colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        let primary;
        // remove from last palette
        changeActiveColorClass();
        if (color.classList.contains("color-1")) {
            primaryHue = 170;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 302;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        } else if (color.classList.contains("color-6")) {
            primaryHue = 252;
        }
        color.classList.add("active");
        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});

let light_lightness;
let white_lightness;
let dark_lightness;

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", light_lightness);
    root.style.setProperty("--white-color-lightness", white_lightness);
    root.style.setProperty("--dark-color-lightness", dark_lightness);
};

bg1.addEventListener("click", () => {
    dark_lightness = "95%";
    white_lightness = "20%";
    light_lightness = "15%";

    bg1.classList.add("active");

    bg2.classList.remove("active");
    bg3.classList.remove("active");

    window.location.reload(); // to keep css default we reload page
});
bg2.addEventListener("click", () => {
    dark_lightness = "95%";
    white_lightness = "20%";
    light_lightness = "15%";

    bg2.classList.add("active");

    bg1.classList.remove("active");
    bg3.classList.remove("active");

    themeModal.style.display = "none";
    changeBG();
});
bg3.addEventListener("click", () => {
    dark_lightness = "95%";
    white_lightness = "10%";
    light_lightness = "0%";

    bg3.classList.add("active");

    bg1.classList.remove("active");
    bg2.classList.remove("active");

    themeModal.style.display = "none";
    changeBG();
});