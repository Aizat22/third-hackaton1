import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8sjWmHDJB_w63DC7LVYWWKqHlhB9Esds",
  authDomain: "hackaton-3-5a672.firebaseapp.com",
  projectId: "hackaton-3-5a672",
  storageBucket: "hackaton-3-5a672.appspot.com",
  messagingSenderId: "470143780849",
  appId: "1:470143780849:web:b993eda216bfd2c882a650",
  measurementId: "G-EM7CJL7TCF"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
