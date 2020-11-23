// -------------------Función para registrarse----------------------

export const newUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};


//
