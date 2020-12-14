import { createUser, getUser } from '../firebase/firebase-Auth.js';
import { userCollection } from '../firebase/firestore.js';

// ---------------------Función que almacenara el mensaje----------------------
const Message = (text) => {
  const showScreen = document.createElement('div');
  showScreen.classList.add('showScreen');
  // La propiedad textContent el contenido de texto de un nodo y sus dencendientes.
  showScreen.textContent = text;
  document.body.appendChild(showScreen);
};

const userProfilePicByDefault = '../imagenes/avatar.jpeg';
export const ClickSinUp = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const surname = document.querySelector('#surname').value;
  const user = document.querySelector('#user').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  // registerUser(name, surname, user, email, password);
  // condiconal
  if (name === '') {
    Message('❗ Por favor, complete campo de nombre');
  } else if (surname === '') {
    Message('❗ Por favor, complete campo de surname');
  } else if (user === '') {
    Message('❗ Por favor, complete campo de usuario');
  } else if (email === '') {
    Message('⚠ Por favor, complete campo de email');
  } else if (password === '') {
    Message('⚠ Por favor, complete campo de password');
  } else {
    // const registerUser = (name, surname, user, email, password) => {
    createUser(email, password)
      .then((result) => {
        // console.log(result);
        Message('Gracias por registarte');
        const CurrentUser = getUser();
        CurrentUser.updateProfile({
          displayName: name,
          PhotoURL: userProfilePicByDefault,
        });
        userCollection(result.user.uid, name, email, userProfilePicByDefault)
          .then(() => { window.location.hash = '#/Home'; });
      })
      .catch(() => {
        Message('No pudo registrarse intente nuevamente');
      });
  }
};

// name: username,
// email: emailUser,
// uid: idDoc,
// photoUrl: PhotoUser,
