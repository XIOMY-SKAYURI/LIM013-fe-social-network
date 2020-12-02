import { Post, deleteNote } from '../firebase/firestore.js';

// --------------------------------------Función--------------------------------------------//

export const createAddNote = (userID, username, note, date) => {
  // console.log(userID);
  // console.log(username);
  // console.log(note);
  // console.log(date);
  // console.log(Photo);
  Post(userID, username, note, date)
    .then((doc) => {
      console.log('escribe tu post', doc.id);
    })
    .catch((error) => {
      console.error('Error al crear post ', error);
    });
};

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

// export const editPost = (idDoc) => {
//   // const id = e.target.dataset.uid;
//   getDocId(idDoc)
//     .then(() => {
//       console.log('documento editado con exito!');
//     })
//     .catch((error) => {
//       console.error('error al editar ', error);
//     });
// };


// userID: uid,
// name: username,
// note: createNote,
// date,
// photo: photoUser,
