import ScrollSuave from './modules/scroll-suave.js';
import initScrollAnimation from './modules/animacao-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/navTab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initDate from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');

scrollSuave.init();
initScrollAnimation();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDown();
initDate();
initFetchAnimais();
initMenuMobile();
initFetchBitcoin();
