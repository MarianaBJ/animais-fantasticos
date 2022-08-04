import ScrollSuave from './modules/scroll-suave.js';
import initScrollAnimation from './modules/animacao-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/navTab.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initDate from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

initScrollAnimation();
initTooltip();
initDropDown();
initDate();
initFetchAnimais();
initMenuMobile();
initFetchBitcoin();
