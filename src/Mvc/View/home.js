import { createAddNote, deletePost } from '../firesbase-controller/home-controller.js';
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

    <div class='containerInfoUser'>
     <img   class='foto' src="imagenes/usuario2.jpg">
      <div class='namePencil'>

       <p8 class='p8'>${user.displayName}</p8>
       <img class='lapiz' src="imagenes/lapiz.png">
      </div>
 
    <p9 class='p9' >hola soy juana flores y me  gusta mucho la ciencia y bla bla bla. bña blabla bla bla blab bla bla bla bla bla bla.....  </p9>
 
      <div class='containerDetalles'>

             <button id='infoGeneral' ><img class='icoInfo' src="imagenes/ubicacion.png"></button>
        <a href="#" class='tituloIcon'>Madrid, España</a>
        <button id='infoGeneral' ><img class='icoInfo' src="imagenes/academic.png"></button>
        <a href="#" class='tituloIcon'>estudiante, medicina</a>
        <button id='infoGeneral' ><img class='icoInfo' src="imagenes/flor.png"></button>
        <a href="#" class='tituloIcon'>bailar</a>
      </div>
    </div>
  
    <div class='containerSubir'>
      <img   class='foto1' src="imagenes/usuario2.jpg">
      <div class='containerSubirInput'>
      <textarea id="compartirSubir" name="compartirSubir" rows="4" cols="50" placeholder=" compartir información"></textarea>
      <button id='publicar' class='icoPostGeneral' >Publicar</button>
      
      

      <div class='botonesSubir'>
      <button id='icoSubir' ><img class='icoInfo' src="imagenes/video.png"></button>
      <button id='icoSubir' ><img class='icoInfo' src="imagenes/camara.png"></button>
      <button id='icoSubir' ><img class='icoInfo' src="imagenes/doc.png"></button>
      </div>
      </div>
    </div>

    <div class='containerPosteado'>

      <div class='containerPosteadoUsuario'>
      <div class='posteadoUsuario'>
      <img   class='fotos' src="imagenes/usuario2.jpg">
      <p8 class='p8'>Juana Flores</p8>
    </div>
  
    </div>

    <div class='containerPosteadoImg'>
      <img   class='lineas' src="imagenes/linea.png">
      <img   class='imagenEjemplo' src="imagenes/home.png">
      <div id='containerPost'>  </div>
      <img   class='lineas' src="imagenes/linea.png">
    </div>

    <div class='containerSubir'>
      <img   class='fotos' src="imagenes/usuario2.jpg">
      <div class='containerSubirInput'>
        <textarea id="postear" name="compartirSubir" rows="4" cols="50" placeholder=" compartir información"></textarea>
      <div class='botonespostear'>
        <button id='icoSubir' ><img class='icoPostear' src="imagenes/enviar.png"></button>
        <a href="#" class='tituloIcon'>subir</a>
        
      </div>
      </div>
    </div>
    </div>
    </div>

    <div>
  <button class='cerrarsesión'>Cerrar sesión</button>
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


  const btnEnviar = divElemt.querySelector('#publicar');
  // readAddNotes
  btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    const postText = divElemt.querySelector('#compartirSubir').value;
    const date = new Date(); // crea objeto fecha
    if (postText !== '') {
      createAddNote(
        user.uid,
        user.displayName,
        postText,
        date,
        // user.PhotoURL,
      );
    }
    // btnEnviar.reset();
  });

  // ------Mostrar data-----
  const changes = () => {
    onGetPost((querySnapshot) => {
      const mostrarPost = divElemt.querySelector('#containerPost');
      mostrarPost.innerHTML = '';
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          userID: doc.id,
          name: doc.data().userID,
          note: doc.data().note,
          date: doc.data().date,
          // photo: doc.data().photo,
        });
        console.log(data);
        const infoDoc = doc.data();
        infoDoc.id = doc.id;

        mostrarPost.innerHTML += `<div class='containerPost'> <p9> ${doc.data().note} </p9> 
                <div class='iconos'>
                <button id='icono' class='btneditar' data-id='${infoDoc.id}' ><img class='icoPostear' src="imagenes/lapiz.png">editar</button>
                <button id='icono' class='btndelete' data-id='${infoDoc.id}' ><img class='icoPostear' src="imagenes/TACHO.png">borrar</button>
                </div>
                </div>`;

        const btnDelete = divElemt.querySelectorAll('.btndelete');
        btnDelete.forEach((boton) => {
          boton.addEventListener('click', (e) => {
            console.log(e.target.dataset.id);
            deletePost(e.target.dataset.id);
          });
        });

        // const btneditar = divElemt.querySelectorAll('.btneditar');
        // btneditar.forEach((boton) => {
        //   boton.addEventListener('click', (e) => {
        //     console.log(e.target.dataset.id);
        //     const docEdit = editPost(e.target.dataset.id);
        //     console.log(docEdit.data());
        //   });
        // });
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
