//  ----------------Función que mostrará contenido de vista Sign In (iniciar secion)-------------//
// exportamos al archivo index de la misma carpeta 'vistas'

export default () => {
  const viewSignIn = document.createElement('div');
  viewSignIn.classList.add('position');
  viewSignIn.innerHTML = `
  <form>
  <div class='logIn'>
  <figure> 
 <img class="logo" src="imagenes/BUSCAR.jpg">
 </figure>
 <h1><b> BIENVENIDO A  RESEARCH EASY</b></h1>
 <input type='email' class='SingIn1' placeholder='  correo electrónico'>
 <input type="password" class='SingIn2' placeholder='  contraseña'>
 <a href="#" class='forgot'>¿Olvidates tu contraseña?</a>
 <button id='login' class='login'>Iniciar sesión</button>
 <p1>or</p1>
 <button id='google'><img class="logogoogle" src="imagenes/google.jpg"> Continuar con google</button>
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
  const btnRegister = viewSignIn.querySelector('.registrate');
  btnRegister.addEventListener('click', () => { window.location.hash = '#/signUp'; });

  // const btnRegister = viewSignIn.querySelector('.registrate');
  // btnRegister.addEventListener('click', () => { window.location.hash = '#/signUp'; });


  return viewSignIn;
};

/* <h2 class="text-center">¡aqui podras iniciar secion!</h2>
  <figure class="text-center">
    <img class="image" src="" alt="university community">
  </figure> */
