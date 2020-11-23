import { components } from '../View/index.js';

// -------------------Función que asocia el valor de container para cada ruta---------------------
// el contenido de conatiner es variante

// exportamos a main.js
export const changeTmp = (hash) => {
  const container = document.getElementById('container');
  // La hash propiedad  devuelve  un '#'seguido del identificador de fragmento de la URL.
  window.location.hash = hash;
  container.innerHTML = '';
  switch (hash) {
    case '': // agregame al final de container components y su propiedad
      container.appendChild(components.SignI());
      break;
    case '#/signUp':
      container.appendChild(components.SignU());
      break;
    case '#/Home':
      container.appendChild(components.hom());
      break;
    default:
      return container.appendChild(components.Different());
  }

  return changeTmp;
};
