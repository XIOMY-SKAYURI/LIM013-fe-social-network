import { createUser } from '../firebase/firebase-Auth.js';
// import {userCollection } from '../firebase/firestore.js';

//  ----------------Función que mostrará contenido de vista Sign Up (Registro)-------------//
// exportamos al archivo index de la misma carpeta 'view'

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
<form id='formRegistro'>
<label id='titulos'for="camponombre">Nombres:</label>
<input type="text" class='register' placeholder="  nombres" id="name" >
  <label id='titulos' for="camposurname">Apellidos:</label>
  <input type="text" class='register' placeholder="  apellidos" id="surname" >
  <label id='titulos' for="campouser">Usuario:</label>
  <input type="text" class='register' placeholder="  usuario" id="user" >
  <label id='titulos' for="email">Correo:</label>
  <input type="email" class='register' id="email" placeholder="correo electrónico" pattern="[a-z]{1,15}">
  <span class="msgtext">Introduzca un correo electrónico válido</span>
  <label id='titulos' for="password">Contraseña:</label>
  <input type="password" class='register' id="password"   placeholder="contraseña" pattern="[a-z]{1,15}">
  <span class="msgtext">Introduzca una contraseña mayor a 6 caracteres</span>
   <div id='politicas'>
   <input type="checkbox" id='check' name="check">
   <p4>Al crear una cuenta en Research Easy, acepta cumplir con nuestros términos, condiciones de servicio y código de honor y acepta nuestras políticas.</p4>
   </div>
   <button type='button' id='SignUp' class='register'>Crear cuenta</button>
   </form>
   </section>
  `;
  // -------------------------Función retorna a vista signIn-------------------------------------//
  const btn = viewSignUp.querySelector('#SignUp');
  btn.addEventListener('click', () => { window.location.hash = ''; });


  // ----------------------------Función que almacenará el mensaje-----------------------------//
  const Message = (text) => {
    const showScreen = document.createElement('div');
    showScreen.classList.add('showScreen');
    showScreen.textContent = text;
    document.body.appendChild(showScreen);
    setTimeout(() => {
      document.body.removeChild(showScreen);
    }, 4000);
  };
  // La propiedad textContent el contenido de texto de un nodo y sus dencendientes.
  // remueve el cuadro de alerta después de 4 segundos (4000 milisegundos)

  // -------------------------Función para crear usuario-------------------------------------//
  const formRegistro = viewSignUp.querySelector('#formRegistro').value; // agrege
  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault(); // cancela el evento
    const name = viewSignUp.querySelector('#name').value;
    const surname = viewSignUp.querySelector('#surname').value;
    const user = viewSignUp.querySelector('#user').value;
    const email = viewSignUp.querySelector('#email').value;
    const password = viewSignUp.querySelector('#password').value;
    if (name === '') {
      Message('❗ Por favor, complete campo de nombre');
    } else if (surname === '') {
      Message('❗ Por favor, complete campo de surname');
    } else if (user === '') {
      Message('❗ Por favor, complete campo de usuario');
    } else if (email === '') {
      Message('⚠️ Por favor, complete campo de email');
    } else if (password === '') {
      Message('⚠️ Por favor, complete campo de password');
    } else {
      createUser(email, password)
        .then(() => {
          // {userCollection (result name, email)}
          Message('Gracias por registrarte');
        })
        .catch(() => {
          Message('No se pudo registrar cuenta, intente nuevamente');
        });
    }
    // formRegistro.reset();
  });

  return viewSignUp;
};


// querySelector() te devolvera el primer elemento que cumpla la condicion que especifiques
// QuerySelectorAll: selecciona todas las coincidencias y las retorna en un array
// getElementById() tienes que hacer referencia a un elemento que tenga un id unico
