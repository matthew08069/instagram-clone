// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1v1HQbyr_U2Fv4DW3bmEURI5XtEVGNXk",
  authDomain: "instagram-clone-7cd92.firebaseapp.com",
  projectId: "instagram-clone-7cd92",
  storageBucket: "instagram-clone-7cd92.appspot.com",
  messagingSenderId: "870456747646",
  appId: "1:870456747646:web:8f737c9680b9338170da2f",
  measurementId: "G-WQZE0VG1Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)

export const db = getFirestore(app)