export default () => {
  const viewSignIn = `
  <h2 class="text-center">¡aqui podras iniciar secion!</h2>
  <figure class="text-center">
    <img class="image" src="" alt="university community">
  </figure>`;

  // creamos un nuevo elemento div  y agregamos  viewSignIn
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewSignIn;
  return divElemt;// retorname el nuevo elemento
};
