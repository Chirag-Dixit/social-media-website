// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//chiragdixit002@gmail.com firebase detials
// const firebaseConfig = {
//   apiKey: "AIzaSyAT34tqAGBsVDHVa5APiqFPECQ89klY2Nw",
//   authDomain: "social-media-website-85d85.firebaseapp.com",
//   projectId: "social-media-website-85d85",
//   storageBucket: "social-media-website-85d85.appspot.com",
//   messagingSenderId: "718470491135",
//   appId: "1:718470491135:web:7fbb36a580aba03d4bd5ca"
// };

//chirag.dixit_cs.da21@gla.ac.in firebase details
const firebaseConfig = {
  apiKey: "AIzaSyCSl6sVfQ0IAWt-Yrw-755f1te1Bk3Aoq0",
  authDomain: "social-media-app-bd50e.firebaseapp.com",
  projectId: "social-media-app-bd50e",
  storageBucket: "social-media-app-bd50e.appspot.com",
  messagingSenderId: "884314133077",
  appId: "1:884314133077:web:f465cacc640cb8d298fadc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const database = getFirestore(app)