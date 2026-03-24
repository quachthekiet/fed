const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        return;
    }
    nav.classList.add('open');
});
