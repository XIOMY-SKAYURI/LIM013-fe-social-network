//  ----------------Función que mostrará contenido de vista Sign In (iniciar secion)-------------//
// exportamos al archivo index de la misma carpeta 'vistas'

export default () => {
  const viewSignIn = document.createElement('div');
  viewSignIn.classList.add('position');
  viewSignIn.innerHTML = `
   <img class="logo" src="imagenes/logo.">
   <p><b> WELCOME TO RESEARCH EASY</b></p>
   <input type='email' class='SingIn' placeholder='correo electronico'>
   <input type="password" class='SingIn' placeholder='contraseña'>
   <button id= login>Iniciar sesion</button>
   <div <a class='links-on-buttons'><img id='gmail' src='imagenes/gmail.png'></a>></div>
   <p class='lil-text'>¿No tienes una cuenta?</p>
   <button class="registrate">Registrate</button>
   <div id=''src=' imagenes/.......   ></div>
  
  `;

  const btnRegister = viewSignIn.querySelector('.registrate');
  btnRegister.addEventListener('click', () => { window.location.hash = '#/signUp'; });


  return viewSignIn;
};

/* <h2 class="text-center">¡aqui podras iniciar secion!</h2>
  <figure class="text-center">
    <img class="image" src="" alt="university community">
  </figure> */
