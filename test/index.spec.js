<<<<<<< HEAD
import { signIn, createUser, signInGoogle } from '../src/Mvc/firebase/firebase-Auth.js';

=======

import { signIn, createUser } from '../src/Mvc/firebase/firebase-Auth.js';

>>>>>>> 9dbd68a9b701bd2180c858fbb0016d0d5ac6a492
// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
// const mockfirestore = new firebasemock.MockFirestore();
// mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  // () => mockfirestore
);

<<<<<<< HEAD
//
=======
>>>>>>> 9dbd68a9b701bd2180c858fbb0016d0d5ac6a492

describe('Sign In ', () => {
  it('Deberia poder iniciar sesión', () => signIn('carlos@gmail.com', '1234567')
    .then((user) => {
      expect(user.email).toBe('carlos@gmail.com');
    }));
});

<<<<<<< HEAD
=======

>>>>>>> 9dbd68a9b701bd2180c858fbb0016d0d5ac6a492
describe('createUser', () => {
  it('Debería poder crear un nuevo usuario', (done) => {
    createUser('ana@gmail.com', '1234567').then((newUser) => {
      expect(newUser.email).toBe('ana@gmail.com');
      expect(newUser.isAnonymous).toBe(false);
      done();
    });
<<<<<<< HEAD
  });
});

describe('signInGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signInGoogle).toBe('function');
  });
  it('debería poder ingresar con Google', () => {
    signInGoogle('carlos@gmail.com')
      .then((user) => {
        expect(user.email).toBe('carlos@gmail.com');
      });
=======
>>>>>>> 9dbd68a9b701bd2180c858fbb0016d0d5ac6a492
  });
});
