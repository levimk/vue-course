import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDTkYK7JSABefkGPABgfTfZbDWjHXvZJw',
  authDomain: 'muso-ninjas-2bc5f.firebaseapp.com',
  projectId: 'muso-ninjas-2bc5f',
  storageBucket: 'muso-ninjas-2bc5f.appspot.com',
  messagingSenderId: '652448939021',
  appId: '1:652448939021:web:c301ac9f01ff513523a944',
  measurementId: 'G-ZX2862FLQE',
};

firebase.initializeApp(firebaseConfig);

// init services
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
