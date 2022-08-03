import initOutsideClick from './outsideclick.js'

export default function initDropDown() {

    const dropDownMenus = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');

        initOutsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    };

    dropDownMenus.forEach(item => {
        ['touchstart', 'click'].forEach(userEvent => {
            item.addEventListener(userEvent, handleClick);
        })
    });


};




