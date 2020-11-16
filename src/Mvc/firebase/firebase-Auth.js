// -------------------Función para iniciar sección----------------------

export const newUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
