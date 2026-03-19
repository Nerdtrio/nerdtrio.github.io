const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Animatie voor de hamburger-icoon
    hamburgerMenu.classList.toggle("open");
    const spans = hamburgerMenu.querySelectorAll("span");
    if (hamburgerMenu.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        spans[0].style.transform = "rotate(0)";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "rotate(0)";
    }
});