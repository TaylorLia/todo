import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCr_loArFGElmHVD4Xw8TvAgu6wuhFd46A",
  authDomain: "todo-8327e.firebaseapp.com",
  projectId: "todo-8327e",
  storageBucket: "todo-8327e.appspot.com",
  messagingSenderId: "767387852502",
  appId: "1:767387852502:web:8271d4ce6abc7491adf377",
  measurementId: "G-Q46JKE0403",
});
export const auth = getAuth(firebaseConfig);
export { firebaseConfig as firebase }