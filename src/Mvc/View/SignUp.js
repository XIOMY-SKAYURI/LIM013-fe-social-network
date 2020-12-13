
import { ClickSinUp } from '../firesbase-controller/SignUp-controller.js';

// ---------------------Función que almacenara el mensaje----------------------

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
    <label id='titulos' for="camponombre">Nombres:</label>
    <input type="text" class='register' placeholder="  nombres" id="name">
    <label id='titulos' for="camposurname">Apellidos:</label>
    <input type="text" class='register' placeholder="  apellidos" id="surname">
    <label id='titulos' for="campouser">Usuario:</label>
    <input type="text" class='register' placeholder="  usuario" id="user">
    <label id='titulos' for="email">Correo:</label>
    <input type="email" class='register' id="email" placeholder="  correo electrónico">
    <label id='titulos' for="password">Contraseña:</label>
    <input type="password" class='register' id="password" placeholder="  contraseña">
    <div id='politicas'>
      <input type="checkbox" id='check' name="check">
      <p4 class='p4'>Al crear una cuenta en Research Easy, acepta cumplir con nuestros términos, condiciones de servicio
        y
        código de honor y acepta nuestras políticas.</p4>
    </div>
    <button type='button' id='SignUp' class='register'>Crear cuenta</button>
  </form>
</section>
  `;


  const btnRegister = viewSignUp.querySelector('#SignUp');
  btnRegister.addEventListener('click', ClickSinUp);

  return viewSignUp;
};
