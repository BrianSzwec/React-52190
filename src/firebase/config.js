// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8B-Tshd9B1ZxRVtJA9gEyNH83xJz8GlI",
  authDomain: "cursoreact-52190.firebaseapp.com",
  projectId: "cursoreact-52190",
  storageBucket: "cursoreact-52190.appspot.com",
  messagingSenderId: "837401685503",
  appId: "1:837401685503:web:06ce6e3e9692d807980bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db =getFirestore(app)
