import home from './home.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import Different from './404.js';

// ------------------------Objetos----------------------------------
// creo objeto que tendra por valor función home, SignIn, SignUp

// exporta se usara en rauter.js de view-controller
export const components = {
  home, // cuando tenemos duplicado podemos recortar.
  SignIn,
  SignUp,
  Different,
};
