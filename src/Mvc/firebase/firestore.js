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

export const Post = (uid, username, createNote, date, status) => firebase.firestore().collection('post').add({
  userID: uid,
  name: username,
  note: createNote,
  date,
  status,
  // photo: photoUser,
});
// ------Mostrar cambios en tiempo real-----
// lection('pots').onSnapshot(callback);
// ----------------------------Mostrar cambios en tiempo real----------------------------//
export const onGetPost = callback => firebase.firestore().collection('post').where('status', '==', 'public')
  .onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        userID: doc.id,
        name: doc.data().userID,
        note: doc.data().note,
        date: doc.data().date,
      });
    });

    //
    callback(data);
  });

// método onSnapshot(). Una llamada inicial con la devolución de llamada que proporcionas crea una
// // instantánea del documento de inmediato con los contenidos actuales de ese documento.

// ----------------------------- eliminar post----------------------------------------//
export const deleteNote = idDoc => firebase.firestore().collection('post').doc(idDoc).delete();


// -------------------------------actualizar datos----------------------------------//

// le paso como parámetroa al id del post y a la nota
export const update = (id, note) => firebase.firestore().collection('post').doc(id).update({

  // note es la propiedad que quiero actualizar
  note,
});
