document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');
    const menuLinks = menu ? menu.querySelectorAll('a') : [];

    // burger menu
    if (burgerMenu && menu) {
        burgerMenu.addEventListener('click', () => {
            console.log('Burger menu clicked');
            menu.classList.toggle('active');
            burgerMenu.classList.toggle('open');
            document.documentElement.classList.toggle('no-scroll');
        });
    }

    // close the menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            burgerMenu.classList.remove('open');
            document.documentElement.classList.remove('no-scroll');
        });
    });
});
