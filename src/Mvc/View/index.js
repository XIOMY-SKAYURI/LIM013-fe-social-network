import home from './home.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import Different from './404.js';

// ------------------------Función de objetos----------------------------------
// creo objeto que tendra por valor función home, SignIn, SignUp

// exporto función que usare en rauter.js de view-controller
export const components = {
  hom: home,
  SignI: SignIn,
  SignU: SignUp,
  different: Different,
};
