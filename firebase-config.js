// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVb19bAWOOynwaYQLO4RCFoYybXkJqDRU",
  authDomain: "envirocam-5e2b4.firebaseapp.com",
  projectId: "envirocam-5e2b4",
  storageBucket: "envirocam-5e2b4.firebasestorage.app",
  messagingSenderId: "1008928914623",
  appId: "1:1008928914623:web:0ba8c27cf1e6e45f181a0a",
  measurementId: "G-F2KSK44YT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);