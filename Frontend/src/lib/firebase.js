// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-64SyJzcrk-Xk8LWt1SU01GcwfyTf8fY",
  authDomain: "jcd-blogs.firebaseapp.com",
  projectId: "jcd-blogs",
  storageBucket: "jcd-blogs.firebasestorage.app",
  messagingSenderId: "617244381760",
  appId: "1:617244381760:web:f19956d70d90fd735c45a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };