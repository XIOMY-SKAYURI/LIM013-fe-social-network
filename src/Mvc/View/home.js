import { createAddNote } from '../firesbase-controller/home-controller.js';
// import { userCollection } from '../firebase/firestore.js';
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
      <button id='icoPostGeneral' >Publicar</button>
      <button id='icoPostGeneral' >Editar</button>
      <button id='icoPostGeneral' >Borrar</button>

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
      <p9 class='p9' >aqui les dejo info sobre los huesos bla bla bla bla blablablabalablal blabla bla bla blab bla bla bla bla bla bla.....  </p9>
      <img   class='lineas' src="imagenes/linea.png">
    </div>

    <div class='containerSubir'>
      <img   class='fotos' src="imagenes/usuario2.jpg">
      <div class='containerSubirInput'>
        <textarea id="postear" name="compartirSubir" rows="4" cols="50" placeholder=" compartir información"></textarea>
      <div class='botonespostear'>
        <button id='icoSubir' ><img class='icoPostear' src="imagenes/enviar.png"></button>
        <a href="#" class='tituloIcon'>subir</a>
        <button id='icoSubir' ><img class='icoPostear' src="imagenes/lapiz.png"></button>
        <a href="#" class='tituloIcon'>editar</a>
        <button id='icoSubir' ><img class='icoPostear' src="imagenes/TACHO.png"></button>
        <a href="#" class='tituloIcon'>borrar</a>
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
  const btnEnviar = divElemt.querySelector('#icoPostGeneral');
  // readAddNotes
  btnEnviar.addEventListener('click', () => {
    const postText = divElemt.querySelector('#compartirSubir').value;
    const date = new Date(); // crea objeto fecha
    if (postText !== '') {
      createAddNote(
        user.uid,
        user.displayName,
        postText,
        date,
        user.PhotoURL,
      );
    }
  });
  return divElemt;
};
