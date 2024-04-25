// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPMWoLlC5XlR8vwDp_k4fFjt3Kht9sr4Q",
  authDomain: "netflixgpt-6e5f8.firebaseapp.com",
  projectId: "netflixgpt-6e5f8",
  storageBucket: "netflixgpt-6e5f8.appspot.com",
  messagingSenderId: "512542664440",
  appId: "1:512542664440:web:33edb401fc74fa045dfd0d",
  measurementId: "G-YHSBLY25KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
