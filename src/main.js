import { changeTmp } from './Mvc/view-controller/rauter.js'; // importamos funcion de controlador

//  changeTmp();

// ---------------------------Funcion que permite hacer cambio de View-----------------------------

// La propiedad hash contiene el identificador de fragmento (incluido el carácter hash) #Sign Up
const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
// 'hashchange' es ejecutado cuando el fragmento identificador de la URL ha cambiado
// ' la URL que continúa despues del simbolo #'
};
// cada vez que escuches cargar ejecuta funcion init
window.addEventListener('load', init);
