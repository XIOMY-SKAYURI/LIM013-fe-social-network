// ----------------------------------Función para registrar nuevo usuario---------------------------
// exporta a signUp
// se asigna valor firebase.auth(); para evitar error en funcion
export const createUser = (email, password) => {
  const authentication = firebase.auth();
  return authentication.createUserWithEmailAndPassword(email, password);
};

// export const newUser = (email, password) => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password);
// };
