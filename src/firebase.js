import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDSlRldue8OGyWBN_jlQFU7Jp-vqUEwBCs',
  authDomain: 'clone-b77fb.firebaseapp.com',
  databaseURL: 'https://clone-b77fb.firebaseio.com',
  projectId: 'clone-b77fb',
  storageBucket: 'clone-b77fb.appspot.com',
  messagingSenderId: '904114552654',
  appId: '1:904114552654:web:42e09c056edf159c7ce81f',
  measurementId: 'G-2LRDY5ZT0B',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
