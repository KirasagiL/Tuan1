// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb-yTqzVEu8f14VSRqW6rDASqBf7ns2HU",
  authDomain: "reactproject-a280c.firebaseapp.com",
  projectId: "reactproject-a280c",
  storageBucket: "reactproject-a280c.appspot.com",
  messagingSenderId: "1054198048838",
  appId: "1:1054198048838:web:21a9264e89d3864545c247"
};

// Initialize Firebase
let app;
try {
  app = firebase.app();
} catch (e) {
  app = firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };