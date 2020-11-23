// ----------------------Función crea collecion de usuario -----------------------------------//
export const userCollection = (idDoc, username, emailUser, userPhotoUrl) => firebase.firestore()
  .collection('users').doc(idDoc).set({
    name: username,
    email: emailUser,
    uid: idDoc,
    photoUrl: userPhotoUrl,
  });

// Metodo set Para crear o reemplazar un solo documento
// cuando usa set para crear un documento especificar un ID para el documento que vas a crear.
