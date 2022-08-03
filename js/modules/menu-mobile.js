import initOutsideClick from './outsideclick.js';


export default function initMenuMobile() {

    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];

    function openMenu() {
        menuList.classList.add('active');
        menuButton.classList.add('active');

        initOutsideClick(menuList, eventos, () => {
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        })
    };

    if (menuList) {
        eventos.forEach(ev => menuButton.addEventListener(ev, openMenu));
    }
}



