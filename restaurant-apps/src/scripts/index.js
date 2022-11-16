import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
// eslint-disable-next-line import/extensions
import './components/footer-content.js';
import './components/form-reviews';
import App from './views/app';
import swRegister from './utils/sw-register';

const hamburgerBar = document.getElementById('ham-bar');
const closeBar = document.getElementById('close-bar');
const ulNavbar = document.getElementById('ul-navbar');

hamburgerBar.addEventListener('click', () => {
  closeBar.classList.add('show-icon');
  hamburgerBar.classList.add('unshow-icon');
  ulNavbar.classList.add('show');
});

closeBar.addEventListener('click', () => {
  hamburgerBar.classList.remove('unshow-icon');
  closeBar.classList.remove('show-icon');
  ulNavbar.classList.remove('show');
});

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
