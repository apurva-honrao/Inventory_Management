// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWaIWlGvbAbCBIZBi1EBj7xbTrc_WUtcs",
  authDomain: "inventory-management-32378.firebaseapp.com",
  projectId: "inventory-management-32378",
  storageBucket: "inventory-management-32378.appspot.com",
  messagingSenderId: "129982109194",
  appId: "1:129982109194:web:7d5abbffbe0ab3e01eb1f3",
  measurementId: "G-2KSMR6F9Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};