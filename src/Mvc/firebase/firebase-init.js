
export const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDFhqMte9QnsAq0ZGGlf1RAU8o7aufzRjY',
    authDomain: 'research-easy.firebaseapp.com',
    databaseURL: 'https://research-easy.firebaseio.com',
    projectId: 'research-easy',
    storageBucket: 'research-easy.appspot.com',
    messagingSenderId: '1025937734584',
    appId: '1:1025937734584:web:7dd3790df267cefea26d4d',
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
};
