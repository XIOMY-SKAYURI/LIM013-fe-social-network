//  ----------------Función que mostrará contenido de vista Sign In (iniciar secion)-------------//
// exportamos al archivo index de la misma carpeta 'vistas'
export default () => {
  const viewSignIn = `
  <div id=login>
    <p><b> WELCOME TO RESEARCH EASY</b></p>
   <input type="email" placeholder="correo electronico">
   <input type="password" placeholder="contraseña">
   <button id= login>Log In</button>
  </div>
  `;

  // creamos un nuevo elemento div  y agregamos  viewSignIn
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewSignIn;
  return divElemt;// retorname el nuevo elemento
};

/* <h2 class="text-center">¡aqui podras iniciar secion!</h2>
  <figure class="text-center">
    <img class="image" src="" alt="university community">
  </figure> */
