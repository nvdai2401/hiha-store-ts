import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqQ6yp4bge9MIamshGofBggZ5zz2oR5FE',
  authDomain: 'hiha-store.firebaseapp.com',
  databaseURL: 'https://hiha-store.firebaseio.com',
  projectId: 'hiha-store',
  storageBucket: 'hiha-store.appspot.com',
  messagingSenderId: '621223607878',
  appId: '1:621223607878:web:4c972b9f628d32961ad447',
  measurementId: 'G-BRVFE84DQW',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
