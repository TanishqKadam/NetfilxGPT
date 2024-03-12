// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxphQB1fKDPi1gU2Jelkjca20XEYXVfmY",
  authDomain: "netfilxgpt-750e4.firebaseapp.com",
  projectId: "netfilxgpt-750e4",
  storageBucket: "netfilxgpt-750e4.appspot.com",
  messagingSenderId: "1048179444559",
  appId: "1:1048179444559:web:65cafa1dec614a0f38133a",
  measurementId: "G-6Q71RGLVKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();