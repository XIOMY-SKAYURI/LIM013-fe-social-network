import { components } from '../View/index.js';

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
      return container.appendChild(components.different());
  }
};
