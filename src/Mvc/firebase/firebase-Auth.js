// -------------------Función para iniciar sección----------------------
export const logIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
