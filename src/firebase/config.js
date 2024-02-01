// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnr2dGDeMLAEQs6W8dYHbo6Yg22OOnRw0",
  authDomain: "mitr-db239.firebaseapp.com",
  projectId: "mitr-db239",
  storageBucket: "mitr-db239.appspot.com",
  messagingSenderId: "909487714234",
  appId: "1:909487714234:web:98826ea8528432d2cdb783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);