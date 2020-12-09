import {
  Post, deleteNote, update,
} from '../firebase/firestore.js';

// --------------------------------------Función--------------------------------------------//

export const createAddNote = (userID, username, note, date, status) => {
  // console.log(userID);
  // console.log(username);
  // console.log(note);
  // console.log(date);
  // console.log(Photo);
  Post(userID, username, note, date, status)
    .then((doc) => {
      console.log('escribe tu post', doc.id);
    })
    .catch((error) => {
      console.error('Error al crear post ', error);
    });
};

// consumo la promesa deleteNote

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

// consumo la promesa updatePost pasandole los 2 parámetros

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
// userID: uid,
// name: username,
// note: createNote,
// date,
// photo: photoUser,
