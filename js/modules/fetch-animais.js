import AnimaNumeros from './initAnimaNumeros.js';

export default function fetchAnimais(url, target) {

    async function criarAnimais() {
        try {

            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();
            const numerosGrid = document.querySelector(target);

            animaisJSON.forEach(animal => {
                const divAnimal = createAnimal(animal);
                numerosGrid.appendChild(divAnimal);
            });

            const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
            animaNumeros.init();
        } catch (erro) {
            console.log(erro)
        }

    };

    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`

        return div;
    };

    return criarAnimais();

};
