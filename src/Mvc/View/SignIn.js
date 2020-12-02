import { signIn, signInGoogle } from '../firebase/firebase-Auth.js';
// import { readAddNotes } from '../firebase/firestore.js';

export default () => {
  const viewSignIn = document.createElement('div');
  // viewSignIn.classList.add('position');
  viewSignIn.innerHTML = `
    <form>
    <div class='logIn'>
    <div class='ocultar'>
    <div class='veraviso'>
    <div class='cajaalert'><img class="alert" src="imagenes/alert.png"><h3 >No se ha podido iniciar tu sesión.</h3></div>
    <p5 id="mensajeEmail" class='aviso'></p5>
   <p6 id="mensajePass" class='aviso'></p6>
    </div>
    </div>
    <figure> 
   <img class="logo" src="imagenes/BUSCAR.jpg">
   </figure>
   <h1><b> BIENVENIDO A  RESEARCH EASY</b></h1>
   <input type='email' class='SingIn1' placeholder='  correo electrónico'>
   <input type="password" class='SingIn2' placeholder='  contraseña'  >
   <a href="#" class='forgot'>¿Olvidates tu contraseña?</a>
   <button id='login' class='login'>Iniciar sesión</button>
   <p1 class='p1'>or</p1>
   <button id='google' class='ingresargoogle'><img class="logogoogle" src="imagenes/google.jpg"> Continuar con google</button>
   <div class='containerCrear'>
   <p2 class='p2'>¿Nuevo en Research Easy?</p2>
   <a href="#/signUp" class = 'registrate'>Crea una cuenta aquí </a>
      </div>
      </div>
      <figure> 
      <img class="universitarios" src="imagenes/universitarios.jpg">
      </figure>
      </form>
  `;
  // const btnRegister = viewSignIn.querySelector('.registrate');
  // btnRegister.addEventListener('click', () => { window.location.hash = '#/signUp'; });
  const txtEmail = viewSignIn.querySelector('.SingIn1');
  const txtPassword = viewSignIn.querySelector('.SingIn2');
  const aviso = viewSignIn.querySelector('.ocultar');
  const btnRegister1 = viewSignIn.querySelector('.login');
  btnRegister1.addEventListener('click', (e) => {
    e.preventDefault();
    const email = txtEmail.value;
    const pass = txtPassword.value;
    // const auth = firebase.auth();
    // const promise = auth.signInWithEmailAndPassword(email, pass);
    signIn(email, pass)
      .then(() => {
        window.location.hash = '#/Home';
        // readAddNotes();
      })
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
          aviso.classList.remove('ocultar');
          document.getElementById('mensajePass').innerHTML = '*Contraseña incorrecta';
        } else if (errorCode === 'auth/invalid-email') {
          aviso.classList.remove('ocultar');
          document.getElementById('mensajeEmail').innerHTML = '*La dirección de correo que has ingresado no está en el formato correcto';
        } else {
          aviso.classList.remove('ocultar');
          document.getElementById('mensajeEmail').innerHTML = '*Esta cuenta no existe en RESEARCH EASY.Indicar otra o crear una nueva';
        }
        // console.log(error);
      });
  });
  // Maneja el flujo de acceso con el SDK de Firebase
  const ingresarGoogle = viewSignIn.querySelector('.ingresargoogle');
  ingresarGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle()
      .then(() => {
        window.location.hash = '#/Home';
        // readAddNotes();
      });
  });
  return viewSignIn;
};
