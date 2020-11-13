import { components } from '../View/index.js';

// -------------------Función que mostrará el valor de container para cada ruta---------------------
// el contenido de conatiner es variante

export const changeTmp = (hash) => {
  // console.log(hash);
  // const id = hash.split('/')[1];
  const container = document.getElementById('container');
  container.innerHTML = '';

  switch (hash) {
    case '#/SignIn': { return container.appendChild(components.SignI()); }
    case '#/SignUp': { return container.appendChild(components.SignU()); }
    case '#/Home': { return container.appendChild(components.hom()); }
    default:
      return container.appendChild(components.Different());
  }
};
