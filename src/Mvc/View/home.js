import { createAddNote, deletePost, updatePost } from '../firesbase-controller/home-controller.js';
import { onGetPost } from '../firebase/firestore.js';
import { getUser, signOut } from '../firebase/firebase-Auth.js';

//  --------------------------Función que mostrará contenido de vista home------------------------//
// exportamos al archivo index de la misma carpeta 'vistas'
// src="imagenes/usuario2.jpg"
// src="${user.photo}"
// ${user.name}

export default () => {
  // creamos un nuevo elemento div  y agregamos  viewHome
  const user = getUser();
  const divElemt = document.createElement('div');
  divElemt.innerHTML = `
  <header>
    <figure>
      <img class="logohome" src="imagenes/BUSCAR.jpg">
      <p7 class='p7'>RESEARCH EASY<p7>
     </figure>
  </header>
  <section class='sectionHome'>
  <div id='part1'>
    <div class='containerInfoUser'>
    <img   class='foto' src='${user.photoURL}'>
      <div class='namePencil'>
       <p8 class='p8'>${user.displayName}</p8>
       <img class='lapiz' src="imagenes/lapiz.png">
      </div>
 
      <p9 class='p9' >Hola soy ${user.displayName} y me  gusta mucho la ciencia  </p9>
 
 
      <div class='containerDetalles'>
             <button id='infoGeneral' ><img class='icoInfo' src="imagenes/ubicacion.png"></button>
        <a href="#" class='tituloIcon'>Madrid, España</a>
        <button id='infoGeneral' ><img class='icoInfo' src="imagenes/academic.png"></button>
        <a href="#" class='tituloIcon'>estudiante, medicina</a>
        <button id='infoGeneral' ><img class='icoInfo' src="imagenes/flor.png"></button>
        <a href="#" class='tituloIcon'>bailar</a>
      </div>
    </div>

    </div>  
  
    <div id='part2'>
    <form class='containerSubir' id='containerSubir'>
    <img   class='foto' src='${user.photoURL}'>
      <div class='containerSubirInput'>
      <textarea id="compartirSubir" name="compartirSubir" rows="4" cols="50" placeholder=" compartir información"></textarea>
      <button id='publicar' class='icoPostGeneral' >Publicar</button>
      <select id="post-new-privacity">
      <option id='publico' value="public">🌎 Público</option>
      <option id='privado' value="privacity">🔒 Privado</option>
      </select>
      
      
      <div class='botonesSubir'>
      <button id='icoSubir' ><img class='icoInfo' src="imagenes/video.png"></button>
      <button id='icoSubir' ><img class='icoInfo' src="imagenes/camara.png"></button>
      <button id='icoSubir' ><img class='icoInfo' src="imagenes/doc.png"></button>
      </div>
      </div>
    </form>
    <div class='containerPosteado'>
      <div class='containerPosteadoUsuario'>
      <div class='posteadoUsuario'>
      <img   class='foto' src='${user.photoURL}'>
      <p8 class='p8'>${user.displayName}</p8>
    </div>
  
    </div>
    <div class='containerPosteadoImg'>
      <img   class='lineas' src="imagenes/linea.png">
      <img   class='imagenEjemplo' src="imagenes/home.png">
      
      <div id='containerPost'>  </div>
      <img   class='lineas' src="imagenes/linea.png">
    </div>
    <div class='containerSubir'>
    <img   class='foto' src='${user.photoURL}'>
      <div class='containerSubirInput'>
        <textarea id="postear" name="compartirSubir" rows="4" cols="50" placeholder=" compartir información"></textarea>
      <div class='botonespostear'>
        <button id='icoSubir' ><img class='icoPostear' src="imagenes/enviar.png"></button>
        <a href="#" class='tituloIcon'>subir</a>
        
      </div>
      </div>
    </div>
    </div>
    <div>
  <button class='cerrarsesión'>Cerrar sesión</button>
  </div>
    </div>
  </div> 
  </section>
  
  <footer>
  <p11 class='p11'>Privacidad  · Condiciones  · Publicidad  · Opciones de anuncios   · Cookies  · 
  · RESEARCH EASY © 2020 . KATY HUAMANITITO & XIOMY GARCIA <p11>
  </footer>
        `;

  // ---------------------Función para cerrar sesion-------------------//
  const cerrarsesión = divElemt.querySelector('.cerrarsesión');
  cerrarsesión.addEventListener('click', (e) => {
    e.preventDefault();
    signOut()
      .then(() => {
        window.location.hash = '';
      });
  });
  // ------------------Función que crea nota--------------------------------//
  // selectStatus.addEventListener('change', ()=> {

  // })
  const btnEnviar = divElemt.querySelector('#publicar');
  // readAddNotes
  btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    const postText = divElemt.querySelector('#compartirSubir').value;
    const selectStatus = divElemt.querySelector('#post-new-privacity').value;
    console.log(selectStatus);
    const date = new Date(); // crea objeto fecha

    if (postText !== '') {
      createAddNote(
        user.uid,
        user.displayName,
        postText,
        date,
        // user.PhotoURL,
        selectStatus,
        // status.opcionPrivado,
      );
    }


    // en la linea 43 le cambie el div por form o formulario para usar el rest()
    // El método reset () restablece los valores de todos los elementos en un formulario
    document.getElementById('containerSubir').reset();
  });

  // -------------------------------------Mostrar leer data-----------------------//

  const changes = () => {
    onGetPost((data) => {
      const mostrarPost = divElemt.querySelector('#containerPost');
      mostrarPost.innerHTML = '';
      data.forEach((doc) => {
        // console.log(doc);
        // console.log(doc.id);
        // console.log(doc.note);
        // console.log(data);

        const divPadre = document.createElement('div');
        divPadre.className = 'containerPost';

        divPadre.innerHTML += ` <p id='editarPost-${doc.userID}'> ${doc.note} </p>
                <input type="text" class='oculto' id="resultado-${doc.userID}" placeholder="">
                        <div class='iconos'>
                        <button  id='botoneditar-${doc.userID}' ' ><img class='icoPostear' src="imagenes/lapiz.png">editar</button>
                        <button  id='botonsave-${doc.userID}' class='oculto'><img class='icoPostear' src="imagenes/guardar.png">guardar</button>
                        <button  class='btndelete' data-id='${doc.userID}' ><img class='icoPostear' src="imagenes/TACHO.png">borrar</button>
                        </div>
                        `;

        // --------------------------- Función para borrar --------------------------------------//

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


        // --------------------------- Función para editar ------------------------------------
        // llamo a mi boton editar guardar y al párrafo que quiero editar
        const btnEdit = divPadre.querySelector(`#botoneditar-${doc.userID}`);
        const btnguardar = divPadre.querySelector(`#botonsave-${doc.userID}`);
        const ocultarPost = divPadre.querySelector(`#editarPost-${doc.userID}`);

        btnEdit.addEventListener('click', () => {
          // remuevo al boton guardar y al input donde se va a editar
          btnguardar.classList.remove('oculto');
          const inputEditando = divPadre.querySelector(`#resultado-${doc.userID}`);
          // console.log(inputEditando);
          inputEditando.classList.remove('oculto');
          // oculto al parrafo
          ocultarPost.classList.add('oculto');
        });

        btnguardar.addEventListener('click', () => {
          // guardo en la variable idPost el id de los post :)
          const idPost = doc.userID;
          // guardo en la variable postEditado el valor asignado o post editado en el input
          const postEditado = divPadre.querySelector(`#resultado-${doc.userID}`).value;
          // console.log(postEditado);
          // llamo a la función updatePost
          updatePost(idPost, postEditado);
        });
        // });
        mostrarPost.appendChild(divPadre);
      });
    });
  };
  changes();


  // ------------------Función eliminar nota--------------------------------//

  //   const btnBorrar = divElemt.querySelector('#borrar');
  //   btnBorrar.addEventListener('click', (e) => {
  //     e.stopPropagation();
  //     const id = Post.getAttribute("data-id");
  //       console.log(id);
  //     // deletePost();
  //   });
  return divElemt;
};
