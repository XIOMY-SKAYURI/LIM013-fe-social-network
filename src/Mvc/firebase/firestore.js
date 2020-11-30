// ----------------------Función crea collecion de usuario -----------------------------------//
export const userCollection = (idDoc, username, emailUser, userPhotoUrl) => firebase.firestore().collection('users').doc(idDoc).set({
  name: username,
  email: emailUser,
  uid: idDoc,
  photoUrl: userPhotoUrl,
});
  // .then(function() {
  //    console.log("Document successfully written!");
  // });
  // .catch(function(error) {
  //   console.error("Error writing document: ", error);
  // });

// Metodo set Para crear o reemplazar un solo documento
// cuando usa set para crear un documento especificar un ID para el documento que vas a crear.

// ----------------------Función crea collecion para postear -----------------------------------//
export const createPost = (uid, createNote, photoUser, imgPost) => firebase.firestore().collection('pots').add({
  userID: uid,
  note: createNote,
  photo: photoUser,
  likesCount: 0,
  img: imgPost,
});
// a veces no hay un ID significativo para el documento y es más conveniente
// dejar que Cloud Firestore genere automáticamente un ID. Para hacerlo, llama a add():

// ----------------------Función obtener Obténer actualizaciones----------------------------------//

// método onSnapshot(). Una llamada inicial con la devolución de llamada que proporcionas crea una
// instantánea del documento de inmediato con los contenidos actuales de ese documento.

// db.collection("cities").where("state", "==", "CA")
//     .onSnapshot(function(querySnapshot) {
//         var cities = [];
//         querySnapshot.forEach(function(doc) {
//             cities.push(doc.data().name);
//         });
//         console.log("Current cities in CA: ", cities.join(", "));
//     });
