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

export const Post = (uid, username, createNote, date) => firebase.firestore().collection('pots').add({
  userID: uid,
  name: username,
  note: createNote,
  date,
  // photo: photoUser,

});
// ------Mostrar cambios en tiempo real-----
export const onGetPost = callback => firebase.firestore().collection('pots').onSnapshot(callback);
// -----------------------------Función eliminar post----------------------------------------//
export const deleteNote = idDoc => firebase.firestore().collection('pots').doc(idDoc).delete();

// --------editar-------------

// export const getDocId = idDoc => firebase.firestore().collection('pots').doc(idDoc).get();

// método onSnapshot(). Una llamada inicial con la devolución de llamada que proporcionas crea una
// instantánea del documento de inmediato con los contenidos actuales de ese documento.

// callbackfn es un funcion como parametro lo mando
// .orderBy('date', 'desc')
