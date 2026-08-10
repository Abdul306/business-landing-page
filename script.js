// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when a link is clicked

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 60));

    const updateCounter = () => {

        current += increment;

        if (current >= target) {
            counter.textContent = target + "+";
            return;
        }

        counter.textContent = current;

        requestAnimationFrame(updateCounter);
    };

    updateCounter();
};


// Start counters when About section becomes visible

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                counters.forEach((counter) => {
                    startCounter(counter);
                });

                observer.disconnect();
            }

        });

    },
    {
        threshold: 0.4
    }
);


const aboutSection = document.querySelector(".about");

if (aboutSection) {
    counterObserver.observe(aboutSection);
}


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    alert(
        `Thank you, ${name}! Your message has been received.`
    );

    contactForm.reset();

});
