// ----------------------------------Función para registrar nuevo usuario---------------------------
// exporta a signUp
// se asigna valor firebase.auth(); para evitar error en funcion
export const createUser = (email, password) => {
  const authentication = firebase.auth();
  return authentication.createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, pass) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, pass);
};

// --------------------Funcion para registrase con google-------
export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};


// --------------------Cerrar sesión-------
export const signOut = () => {
  const auth = firebase.auth();
  return auth.signOut();
};
