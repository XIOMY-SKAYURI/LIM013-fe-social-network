import { newUser } from '../firebase/firebase-Auth.js';

// ---------------------Función que almacenara el mensaje----------------------
const Message = (text) => {
  const showScreen = document.createElement('div');
  showScreen.classList.add('showScreen');
  // La propiedad textContent el contenido de texto de un nodo y sus dencendientes.
  showScreen.textContent = text;
  document.body.appendChild(showScreen);
};

// ---------------------función que autentica usuario nuevo-----------------
const registerUser = (name, surname, user, email, password) => {
  // console.log(email, password);
  newUser(email, password)
    .then(() => {
      Message('enviamos un mensaje de confirmación');
    });
};

//  ----------------Función que mostrará contenido de vista Sign Up (Registro)-------------//
// exportamos al archivo index de la misma carpeta 'view'

export default () => {
  const viewSignUp = document.createElement('div');
  viewSignUp.classList.add('view-SignUp');
  viewSignUp.innerHTML = `
  <section id='sectionRegistro'>
      <figure>
<img class="investigacion" src="imagenes/investigacion.jpeg">
</figure>
<form id='formRegistro'>
<div id='titulo'>
<figure>
<img class="linea" src="imagenes/linea.jpeg">
</figure>
<br>
<h2> Crea una nueva cuenta aquí </h2>
<br>
<figure>
<img class="linea" src="imagenes/linea.">
</figure>
</div>
<label id='titulos'for="camponombre">Nombres:</label>
<input type="text" class='register' placeholder="  nombres" id="name" >
  <label id='titulos' for="camposurname">Apellidos:</label>
  <input type="text" class='register' placeholder="  apellidos" id="surname" >
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

  const btnRegister = viewSignUp.querySelector('#SignUp');
  btnRegister.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const user = document.querySelector('#user').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    registerUser(name, surname, user, email, password);
    // condiconal
    // switch (registerUser) {
    //   case name:
    //     Message('Por favor complete el campo de name');
    //     break;
    //   case surname:
    //     Message('Por favor complete el campo de surname');
    //     break;
    //   case user:
    //     Message('Por favor complete el campo de user');
    //     break;
    //   case email:
    //     Message('Por favor complete el campo de email');
    //     break;
    //   case password:
    //     Message('Por favor complete el campo de password');
    //   default:
    //     Message('verifique que todos los campos esten completos');
    //     break;
    // }
  });
  return viewSignUp;
};

// querySelector() te devolvera el primer elemento que cumpla la condicion que especifiques
// QuerySelectorAll: selecciona todas las coincidencias y las retorna en un array
// getElementById() tienes que hacer referencia a un elemento que tenga un id unico
