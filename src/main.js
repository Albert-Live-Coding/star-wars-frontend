import { landingPage } from './pages/landingPage.js';
import { header } from './components/header.js';
import { allFilmsPage } from './pages/allFilmsPage.js';
export const body = document.querySelector('body');
const main = document.createElement('main');

export let activePage = allFilmsPage();

body.appendChild(header());
body.appendChild(main);
main.appendChild(activePage);
