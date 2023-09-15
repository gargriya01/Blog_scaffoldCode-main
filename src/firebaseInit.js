// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxZMMZQGKcRTKbyUhwKqizTROPamjwqYM",
  authDomain: "blogging-app-aeb05.firebaseapp.com",
  projectId: "blogging-app-aeb05",
  storageBucket: "blogging-app-aeb05.appspot.com",
  messagingSenderId: "770952806355",
  appId: "1:770952806355:web:fec1949bd32ecd2e0ab926",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
