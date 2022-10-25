// typescript more specific on file and types
// so we need to have export{} for it
// otherwise it will runs into error
// export {};
// compat for version 8 -> 9
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD466yYxbBK44PNt-1D9g5gDa3is4C5zYM",
  authDomain: "nextfire-742e6.firebaseapp.com",
  projectId: "nextfire-742e6",
  storageBucket: "nextfire-742e6.appspot.com",
  messagingSenderId: "962792046289",
  appId: "1:962792046289:web:1c953bddc1e50ec56dcff0",
  measurementId: "G-KTSCJ2PTPJ",
};

// Firebase can only be init for once so write a condition about it
// Next.js might init twice for develop reason
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
// tell firebase which firebase to use when trigger a pop-up model for the user to sign in
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
