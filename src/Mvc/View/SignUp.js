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
// event.preventDefault();
export default () => {
  const viewSignUp = document.createElement('div');
  viewSignUp.classList.add('view-SignUp');
  viewSignUp.innerHTML = `
      <section id='sectionRegistro'>
          <figure>
    <img class="investigacion" src="imagenes/investigacion.png">
    </figure>
    
    <form id='formRegistro'>
    <div id='titulo'>
    <figure>
    <img class="linea" src="imagenes/linea.png">
    </figure>
    <br>
    <h2> Crea una nueva cuenta aquí </h2>
    <br>
    <figure>
    <img class="linea" src="imagenes/linea.png">
    </figure>
    </div>
    <label id='titulos'for="camponombre">Nombres:</label>
    <input type="text" class='register' placeholder="  nombres" id="name" >
      <label id='titulos' for="camposurname">Apellidos:</label>
      <input type="text" class='register' placeholder="  apellidos" id="surnames" >
      <label id='titulos' for="campouser">Usuario:</label>
      <input type="text" class='register' placeholder="  usuario" id="user" >
      <label id='titulos' for="email">Correo:</label>
      <input type="email" class='register' id="email" placeholder="  correo electrónico">
      <label id='titulos' for="password">Contraseña:</label>
      <input type="password" class='register' id="password"   placeholder="  contraseña">
     
       <div id='politicas'>
       <input type="checkbox" id='check' name="check">
       
       <p4>Al crear una cuenta en Research Easy, acepta cumplir con nuestros términos, condiciones de servicio y código de honor y acepta nuestras políticas.</p4>
       </div>
       <button type='button' id='SignUp' class='register'>Crear cuenta</button>
       </form>
       </section>
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
// .then(userCredencial =>{
//     console.log('holi')
//   });

// querySelector() te devolvera el primer elemento que cumpla la condicion que especifiques
// QuerySelectorAll: selecciona todas las coincidencias y las retorna en un array
