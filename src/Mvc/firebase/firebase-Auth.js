// ----------------------------------Función para registrar nuevo usuario------------------------//
// se asigna valor firebase.auth(); para evitar error en funcion
export const createUser = (email, password) => {
  const authentication = firebase.auth();
  return authentication.createUserWithEmailAndPassword(email, password);
};

// ---------------------------Función para iniciar sesion--------------------------------------//

export const signIn = (email, pass) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, pass);
};

// --------------------------Función para registrase con google---------------------------------//
export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// --------------------------Función para obtener el perfil de usuario--------------------------//
export const getUser = () => firebase.auth().currentUser;

// -----------------------------------------Cerrar sesión---------------------------------------//
export const signOut = () => {
  const auth = firebase.auth();
  return auth.signOut();
};
