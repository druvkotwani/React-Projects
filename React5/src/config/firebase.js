// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL8mZLY6uJzvqp_YINXxOgy_TGhWrtg2E",
  authDomain: "vite-contact-efe76.firebaseapp.com",
  projectId: "vite-contact-efe76",
  storageBucket: "vite-contact-efe76.appspot.com",
  messagingSenderId: "1055268347610",
  appId: "1:1055268347610:web:134515e81d8c7f25c5cfe3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
