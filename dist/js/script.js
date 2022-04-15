// Navnbar fixed
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#toTop");

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
    } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
    }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// Klik not hamburger
window.addEventListener("click", (e) => {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
});

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
    if (darkToggle.checked) {
        html.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
    }
});

// Tombol pindah sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}