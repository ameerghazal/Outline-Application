// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlNdyqE_-ANsm2t5If6mB9uCen10Wfmes",
  authDomain: "outline-application.firebaseapp.com",
  projectId: "outline-application",
  storageBucket: "outline-application.appspot.com",
  messagingSenderId: "486928393801",
  appId: "1:486928393801:web:21046d64934711e4958198",
  measurementId: "G-563JB1YF0F",
};

// Initalize firebase.
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIREBASE_DB = getFirestore(FIREBASE_APP);
