//  --------------------------Función que mostrará contenido de vista home------------------------//
// exportamos al archivo index de la misma carpeta 'vistas'

export default () => {
  const viewHome = `
      <h2 class="text-center">¡HOME!</h2>
      <figure class="text-center">
        <img class="image" src="imagenes/home.png" alt="university community">
      </figure>`;

  // creamos un nuevo elemento div  y agregamos  viewHome
  const divElemt = document.createElement('div');
  // divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  return divElemt;// retorname el nuevo elemento
};
