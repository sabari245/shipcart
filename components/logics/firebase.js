// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-kJYnn6-OONrHuznZs6aIWWPo6Y1x3nc",
  authDomain: "product-manager-5df0a.firebaseapp.com",
  projectId: "product-manager-5df0a",
  storageBucket: "product-manager-5df0a.appspot.com",
  messagingSenderId: "866520761237",
  appId: "1:866520761237:web:7c56b14b6f2b3859666c9c",
  measurementId: "G-8D8V4NH2FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};