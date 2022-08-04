export default class Accordion {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = 'ativo';
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    };

    //Adiciona eventos ao accordion

    addAccortionEvent() {
        this.accordionList.forEach(item => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        });
    }

    init() {
        if (this.accordionList.length) {
            //Ativa o primeiro item
            this.toggleAccordion(this.accordionList[0]);
            this.addAccortionEvent();
        }
    }


};