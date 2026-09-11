import { initNavbar } from './navbar.js';
import { loadSections } from './loadSections.js';

async function init(){

    await loadSections();

    initNavbar();

}

init();