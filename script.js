document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav");  // Zmieniamy na całe "nav", a nie "nav ul"
    const navLinks = document.querySelectorAll("nav ul li a");
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    // Toggle menu na urządzeniach mobilnych
    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Przewijanie i zamykanie menu po kliknięciu na link w menu
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Zatrzymaj domyślne przewijanie
            event.preventDefault();

            // Zwiń menu po kliknięciu linku
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

    // Pokazywanie/ukrywanie przycisku scroll to top
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Pokaż przycisk po przewinięciu 300px
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }

        // Zamknij menu, jeśli strona jest przewijana
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Funkcja przewijania na górę strony po kliknięciu przycisku
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
