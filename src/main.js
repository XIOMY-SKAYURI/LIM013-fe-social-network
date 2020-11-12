import { changeTmp } from './view-controller/index.js'; // importamos funcion de controlador

//  changeTmp();

// cada vez que escuches cargar ejecuta funcion init
const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};

window.addEventListener('load', init);
