//  ----------------Función que mostrará contenido de vista Sign In (iniciar secion)-------------//
// exportamos al archivo index de la misma carpeta 'vistas'
// import { newUser } from '../firebase/firebase-Auth.js';

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
   <p1>or</p1>
   <button id='google' class='ingresargoogle'><img class="logogoogle" src="imagenes/google.jpg"> Continuar con google</button>
   <div class='containerCrear'>
   <p2>¿Nuevo en Research Easy?</p2>
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
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise
      .then(() => { window.location.hash = '#/Home'; })
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
    // 1.Crea una instancia del objeto del proveedor de Google
    const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().languageCode = 'pt';
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        window.location.hash = '#/Home';
      });
      // .catch((error) => {
      // // Handle Errors here.
      //   const errorCode = error.code;
      //   console.log('errorCode');
      //   const errorMessage = error.message;
      //   console.log('errorMessage');
      //   // The email of the user's account used.
      //   const email = error.email;
      //   console.log('email');
      //   // The firebase.auth.AuthCredential type that was used.
      //   const credential = error.credential;
      //   console.log('credential');
      // // ...
      // });
  });
  return viewSignIn;
};

// const ingresarGoogle = viewSignIn.querySelector('.ingresargoogle');
// ingresarGoogle.addEventListener('click', (e) => {
//   e.preventDefault();}
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
// return viewSignIn;
// });