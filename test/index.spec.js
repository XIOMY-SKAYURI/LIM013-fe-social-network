
import { signIn, createUser } from '../src/Mvc/firebase/firebase-Auth.js';

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


describe('Sign In ', () => {
  it('Deberia poder iniciar sesión', () => signIn('carlos@gmail.com', '1234567')
    .then((user) => {
      expect(user.email).toBe('carlos@gmail.com');
    }));
});


describe('createUser', () => {
  it('Debería poder crear un nuevo usuario', (done) => {
    createUser('ana@gmail.com', '1234567').then((newUser) => {
      expect(newUser.email).toBe('ana@gmail.com');
      expect(newUser.isAnonymous).toBe(false);
      done();
    });
  });
});
