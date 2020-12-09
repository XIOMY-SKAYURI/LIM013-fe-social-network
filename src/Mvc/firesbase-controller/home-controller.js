import { Post, deleteNote, update } from '../firebase/firestore.js';

// --------------------------------------Consumo de promesa post---------------------------------//

export const createAddNote = (userID, username, note, date) => {
  // console.log(userID);
  // console.log(username);
  // console.log(note);
  // console.log(date);
  Post(userID, username, note, date)
    .then((doc) => {
      console.log('escribe tu post', doc.id);
    })
    .catch((error) => {
      console.error('Error al crear post ', error);
    });
};

// -------------------------------Consumo la promesa deleteNote ------------------------------//

export const deletePost = (idDoc) => {
  // const id = e.target.dataset.uid;
  deleteNote(idDoc)
    .then(() => {
      console.log('documento exitosamente borrado');
    })
    .catch((error) => {
      console.error('error al remover documento', error);
    });
};

// -------------------Consumo la promesa updatePost pasandole los 2 parámetros--------------------//

export const updatePost = (id, note) => {
  update(id, note)
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
    // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};
