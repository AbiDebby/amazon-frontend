
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// ussed for authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDShYz0D4a0CaUW9IkGlOCOFS9QqayzTtQ",
  authDomain: "clone-61236.firebaseapp.com",
  projectId: "clone-61236",
  storageBucket: "clone-61236.appspot.com",
  messagingSenderId: "928704768549",
  appId: "1:928704768549:web:e735b8e000e7ee9c9bedcc",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()
