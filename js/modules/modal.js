export default class Modal {
    constructor(abrir, fechar, container) {

        this.botaoAbrir = document.querySelector(abrir);
        this.botaoFechar = document.querySelector(fechar);
        this.containerModal = document.querySelector(container);

        //bind this para fazer referêcia ao objeto classe
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueFora = this.cliqueFora.bind(this);
    }


    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    };

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    cliqueFora(event) {
        if (event.target === this.containerModal)
            this.toggleModal()
    };

    addModalEvents() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.cliqueFora);
    };

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents();
        }
        return this;
    }

}
