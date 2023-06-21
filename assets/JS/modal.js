const btnMenu = document.querySelector(".footer__menu-item-link-menu");
const container = document.querySelector('.modal__container');
const btnClose = document.querySelector('.modal__header-menu');
const modal = document.querySelector('.modal');

btnMenu.addEventListener('click', function () {
    container.classList.add('current');
    modal.classList.add('visible');
});

btnClose.addEventListener('click', function () {
    container.classList.remove('current');
    modal.classList.remove('visible');
});

modal.addEventListener('click', function () {
    container.classList.remove('current');
    modal.classList.remove('visible');
});