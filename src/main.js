import { landingPage } from './pages/landingPage.js';
import { header } from './components/header.js';
import { allFilmsPage } from './pages/allFilmsPage.js';
export const body = document.querySelector('body');
export let activePage = allFilmsPage();

body.appendChild(header());
body.appendChild(activePage);
