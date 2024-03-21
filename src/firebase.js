// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSl6sVfQ0IAWt-Yrw-755f1te1Bk3Aoq0",
  authDomain: "social-media-app-bd50e.firebaseapp.com",
  projectId: "social-media-app-bd50e",
  storageBucket: "social-media-app-bd50e.appspot.com",
  messagingSenderId: "884314133077",
  appId: "1:884314133077:web:3326a97973c67fca98fadc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const database = getFirestore(app)