export default function initDate() {

    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
    const diasAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const aberto = diasSemana.indexOf(diasAgora) !== -1;
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);


    if (aberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }
};