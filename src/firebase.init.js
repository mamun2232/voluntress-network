// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1i40t3u0fpe1u5vjqD0uZBE8RoJYocik",
  authDomain: "voluntress-network.firebaseapp.com",
  projectId: "voluntress-network",
  storageBucket: "voluntress-network.appspot.com",
  messagingSenderId: "711685043627",
  appId: "1:711685043627:web:219152c4ee47e909acceee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth