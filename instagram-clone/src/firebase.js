import firebase from "firebase/compat/app";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD1v1HQbyr_U2Fv4DW3bmEURI5XtEVGNXk",
  authDomain: "instagram-clone-7cd92.firebaseapp.com",
  projectId: "instagram-clone-7cd92",
  storageBucket: "instagram-clone-7cd92.appspot.com",
  messagingSenderId: "870456747646",
  appId: "1:870456747646:web:8f737c9680b9338170da2f",
  measurementId: "G-WQZE0VG1Q3"
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};