export default () => {
  const viewHome = `
      <h2 class="text-center">¡Bienvenido a nuestra página!</h2>
      <figure class="text-center">
        <img class="image" src="" alt="university community">
      </figure>`;

  // creamos un nuevo elemento div  y agregamos  viewHome
  const divElemt = document.createElement('div');
  // divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  return divElemt;// retorname el nuevo elemento
};
