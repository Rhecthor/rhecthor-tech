/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("formMessage").style.display = "block";
        this.reset();
    });
});
// Mobile menu toggle
const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

