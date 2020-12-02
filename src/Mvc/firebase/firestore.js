// ----------------------Función crea coleccion de usuario -----------------------------------//
export const userCollection = (idDoc, username, emailUser, userPhoto) => firebase.firestore().collection('users').doc(idDoc).set({
  name: username,
  email: emailUser,
  uid: idDoc,
  photoUrl: userPhoto,
});

// Metodo set Para crear o reemplazar un solo documento
// cuando usa set para crear un documento especificar un ID para el documento que vas a crear.

// ----------------------Función crea collecion para postear -----------------------------------//
export const Post = (uid, username, createNote, date, photoUser) => firebase.firestore().collection('post').add({
  userID: uid,
  name: username,
  note: createNote,
  date,
  photo: photoUser,
});

// a veces no hay un ID significativo para el documento y es más conveniente
// dejar que Cloud Firestore genere automáticamente un ID. Para hacerlo, llama a add():


// ----------------------Función obtener Obténer actualizaciones----------------------------------//

export const readAddNotes = callback => firebase.firestore()
  .collection('post').onSnapshot((querySnapShot) => {
    const data = [];
    querySnapShot.forEach((doc) => {
      data.push({
        userID: doc.id,
        name: doc.data().userID,
        note: doc.data().note,
        date: doc.data().date,
        photo: doc.data().photo,
      });
    });
    callback(data);
  });


// método onSnapshot(). Una llamada inicial con la devolución de llamada que proporcionas crea una
// instantánea del documento de inmediato con los contenidos actuales de ese documento.

// callbackfn es un funcion como parametro lo mando
// .orderBy('date', 'desc')

// ------------------------Función actualiza post-------------------------------------------------//

export const updatePost = (idPost, newContent) => {
  const update = firebase.firestore().collection('posts').doc(idPost);
  return update.update({
    content: newContent,
  });
};

// -----------------------------Función eliminar post----------------------------------------//
export const deleteNote = idNote => firebase.firestore().collection('post').doc(idNote).delete();
