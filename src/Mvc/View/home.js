import { createAddNote, deletePost, updatePost } from '../firesbase-controller/home-controller.js';
import { onGetPost } from '../firebase/firestore.js';
import { getUser, signOut } from '../firebase/firebase-Auth.js';

//  --------------------------Función que mostrará contenido de vista home------------------------//
// exportamos al archivo index de la misma carpeta 'vistas'

export default () => {
  // creamos un nuevo elemento div  y agregamos  viewHome
  const user = getUser();
  const divElemt = document.createElement('div');
  divElemt.innerHTML = `

  <header>
  <img class="logohome" alt="RESEARCH EASY" src="imagenes/BUSCAR.jpg">
  <p class='p7'>RESEARCH EASY</p>
  <div id="cerrarsesión'">
    <button class='cerrarsesión' src= 'imagenes/eliminar.png'>Cerrar sesión</button>
  </div>
</header>
<div class="sectionHome">
  <div class='containerInfoUser'>
    <img class='foto1' src='${user.photoURL}'>
    <div class='namePencil'>
      <p class='p8'>${user.displayName}<i class="far fa-edit"></i></p>
      <p class='p9'>Hola soy ${user.displayName} y me gusta mucho la ciencia </p>
    </div>

    <div class='containerDetalles'>
      <p <i class="fas fa-map-marker-alt">Madrid, España</i>   <i class="fas fa-graduation-cap">Estudiante, medicina</i>    <i class="fas fa-music">bailar</i></p>
    </div>
  </div>
  <form class='containerSubir' id='containerSubir'>
  <div class='containerSubir-Post'>
    <div class= 'crear-post' >
      <div class='post1'>
        <img  class='foto1' src='${user.photoURL}' >
      </div>
      <div class='post2'>
      <div class='containerSubirInput'>
          <textarea id="compartirSubir" rows="10" cols="100" placeholder=" compartir información"></textarea>
          <button id='publicar' class='icoPostGeneral'>Publicar</button>

          <select id="post-new-privacity">
          <option value="public">🌎 Público</option>
          <option value="privacity">🔒 Privado</option>
          </select>

        </div>
      </div>
    </div>
    </form>
    <div class='containerPosteado'>
      <div class='containerPosteadoUsuario'>
        <div class='posteadoUsuario'>
          <img class='foto1' src='${user.photoURL}'>
          <h2 >${user.displayName}</h2>
        </div>
      </div>
      <div class='containerPosteadoImg'>
        <div id='containerPost'> </div>

      </div>
      </div>
  </div>
</div>

 `;

  // ---------------------------------Función para cerrar sesion--------------------------------//
  const cerrarsesión = divElemt.querySelector('.cerrarsesión');
  cerrarsesión.addEventListener('click', (e) => {
    e.preventDefault();
    signOut()
      .then(() => {
        window.location.hash = '';
      });
  });

  // --------------------------------Función que crea nota----------------------------------------//

  const btnEnviar = divElemt.querySelector('#publicar');
  // readAddNotes
  btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    const postText = divElemt.querySelector('#compartirSubir').value;
    const selectStatus = divElemt.querySelector('#post-new-privacity').value;
    const date = new Date(); // crea objeto fecha

    if (postText !== '') {
      createAddNote(
        user.uid,
        user.displayName,
        postText,
        date,
        selectStatus,
        // user.PhotoURL,
      );
    }

    // El método reset () restablece los valores de todos los elementos en un formulario
    document.getElementById('containerSubir').reset();
  });

  // -------------------------------------------Mostrar leer data---------------------------------//

  const changes = () => {
    onGetPost((data) => {
      const mostrarPost = divElemt.querySelector('#containerPost');
      mostrarPost.innerHTML = '';
      data.forEach((doc) => {
        const divPadre = document.createElement('div');
        divPadre.className = 'containerPost';

        divPadre.innerHTML += ` <p id='editarPost-${doc.userID}'> ${doc.note} </p>
                <input type="text" class='oculto' id="resultado-${doc.userID}" placeholder="">
                        <div class='iconos'>
                        <button  id='botoneditar-${doc.userID}' ' ><img class='icoPostear'><i class="fas fa-pencil-alt"></i>Editar</button>
                        <button  id='botonsave-${doc.userID}' class='oculto'><img class='icoPostear'><i class="fas fa-save"></i>Guardar</button>
                        <button  class='btndelete' data-id='${doc.userID}' ><img class='icoPostear'> <i class="fas fa-trash-alt"></i>borrar</button>
                        </div>
                        `;

        // ------------------------------ Función para borrar ------------------------------------//

        // llamo a todos los botones de borrar
        const btnDelete = divElemt.querySelectorAll('.btndelete');
        // recorro cada botón con el foreach
        btnDelete.forEach((boton) => {
          boton.addEventListener('click', (e) => {
            e.preventDefault();
            // llamo a mi función deletePost y le paso como argumento e.target.dataset.id
            deletePost(e.target.dataset.id);
          });
        });


        // --------------------------- Función para editar ------------------------------------//
        // llamo a mi botón editar, guardar y al párrafo que quiero editar
        const btnEdit = divPadre.querySelector(`#botoneditar-${doc.userID}`);
        const btnguardar = divPadre.querySelector(`#botonsave-${doc.userID}`);
        const ocultarPost = divPadre.querySelector(`#editarPost-${doc.userID}`);

        btnEdit.addEventListener('click', (e) => {
          e.preventDefault();
          // remuevo al botón guardar y al input donde se va a editar
          btnguardar.classList.remove('oculto');
          const inputEditando = divPadre.querySelector(`#resultado-${doc.userID}`);
          inputEditando.classList.remove('oculto');
          // oculto al párrafo
          ocultarPost.classList.add('oculto');
        });

        // ------------------------Función pra guardar post---------------------------------------//
        btnguardar.addEventListener('click', (e) => {
          e.preventDefault();
          // guardo en la variable idPost el id de los post :)
          const idPost = doc.userID;
          // guardo en la variable postEditado el valor asignado o post editado en el input
          const postEditado = divPadre.querySelector(`#resultado-${doc.userID}`).value;
          // llamo a la función updatePost
          updatePost(idPost, postEditado);
        });
        mostrarPost.appendChild(divPadre);
      });
    });
  };
  changes();

  return divElemt;
};
