document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Zatrzymaj domyślne przewijanie
            event.preventDefault();

            // Zwiń menu na urządzeniach mobilnych
            navMenu.classList.remove("active");

            // Zaktualizuj aktywne linki
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            link.classList.add("active");

            // Przewiń do odpowiedniej sekcji
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    // Pokaż/ukryj przycisk w zależności od przewinięcia strony
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Pokaż przycisk po przewinięciu 300px
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });

    // Funkcja do przewijania na górę strony po kliknięciu
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
