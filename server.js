document.addEventListener('DOMContentLoaded', () => {
    // Burger menu toggle functionality
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');
    const menuLinks = menu ? menu.querySelectorAll('a') : [];

    if (burgerMenu && menu) {
        burgerMenu.addEventListener('click', () => {
            console.log('Burger menu clicked');
            menu.classList.toggle('active');
            burgerMenu.classList.toggle('open');
            document.documentElement.classList.toggle('no-scroll');
        });
    }

    // Close the menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            burgerMenu.classList.remove('open');
            document.documentElement.classList.remove('no-scroll');
        });
    });

    // initialize EmailJS
    emailjs.init("OTV5OwPgyF8gW7LPd");

    // handle form submission for sending email
    const form = document.getElementById('contactForm');
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.send(
            "service_s2kellp",
            "template_tfz8s7f",
            {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }
        ).then(function(response) {
            alert("Email sent successfully!");
        }, function(error) {
            alert("The service is temporarily unavailable. Please try again later.");
        });
    });
});