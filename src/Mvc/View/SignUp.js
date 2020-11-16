// import { newUser } from '../firebase/firebase-Auth.js';

// ---------------------funncion que autentica usuario nuevo-----------------
// const registerUser = (name, surname, user, email, password) => {
//   newUser(email, password)
//     .then((result) => {
//       alert('se registro con exito'+ result);
//     })
//         .catch((error) => {
//           // Handle Errors here.
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           alert('error')
//         })
//   }


//  ----------------Función que mostrará contenido de vista Sign Up (Registro)-------------//
// exportamos al archivo index de la misma carpeta 'view'

export default () => {
  const viewSignUp = document.createElement('div');
  viewSignUp.classList.add('view-SignUp');
  viewSignUp.innerHTML = `
  <img class="fondo" src=" ">
  <label for="camponombre">Names:</label>
  <input type="text" class='register' placeholder="name" id="name">
     <label for="camposurname">Surnames:</label>
     <input type="text" class='register' placeholder="surnames" id="surnames">
    <label for="campouser">User:</label>
         <input type="text" class='register' placeholder="user" id="user">
     <!--campo de email-->
     <p>
         <label for="email">Email address:</label>
         <input type="email" class='register' id="email">
     </p>
     <!--campo de contraseña-->
     <p>
         <label for="password">contraseña:</label>
         <input type="password" class='register' id="password">
     </p>
     <button type='button' id='SignUp' class='register'>Create Account</button>
    `;

  const btnRegister = viewSignUp.querySelector('.register');
  btnRegister.addEventListener('click', () => {
    // const name = document.getElementById('name').value;
    // const surname = document.getElementById('surnames').value;
    // const user = document.getElementById('user').value;
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;
    // registerUser(name, surname, user, email, password);
  }); // condiconal


  return viewSignUp;
};

// ---------------------funcion de firebase------------------------
// firebase.auth().createUserWithEmailAndPassword(email, password)
// .catch(function(error) {
// Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert('error');
//   });

// querySelector() te devolvera el primer elemento que cumpla la condicion que especifiques
// QuerySelectorAll: selecciona todas las coincidencias y las retorna en un array
// getElementById() tienes que hacer referencia a un elemento que tenga un id unico
