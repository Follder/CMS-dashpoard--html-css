window.addEventListener('DOMContentLoaded', () => {

    //burger menu
    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.side-panel');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('side-panel_active');
    });
});