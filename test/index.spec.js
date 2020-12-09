
import {
  signIn, createUser, signInGoogle, getUser, signOut,
} from '../src/Mvc/firebase/firebase-Auth.js';

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

describe('signInGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signInGoogle).toBe('function');
  });
  it('debería poder ingresar con Google', () => {
    signInGoogle('carlos@gmail.com')
      .then((user) => {
        expect(user.email).toBe('carlos@gmail.com');
      });
  });
});

describe('getUser', () => {
  it('debería ser una función', () => {
    expect(typeof getUser).toBe('function');
  });
  it('Deberia extraer a usuario logeado', () => {
    const user = {
      currentUser: { id: 'abc01' },
    };
    firebase.auth().currentUser = user.currentUser;
    expect(getUser().id).toEqual('abc01');
  });
});

describe('signOut', () => {
  it('Deberia cerrar sesión', () => signOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});
