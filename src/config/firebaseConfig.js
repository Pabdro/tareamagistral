// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpGhbeQtquw077m5uV34rbdKg5JrBQhGk",
  authDomain: "pokedex-b0ff6.firebaseapp.com",
  projectId: "pokedex-b0ff6",
  storageBucket: "pokedex-b0ff6.appspot.com",
  messagingSenderId: "257472605388",
  appId: "1:257472605388:web:2eda618d1c27439ce12669",
  measurementId: "G-QSXNLE4YVJ" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const logInWithEmailAndPassword = async (email, password) => {
try {
  return await signInWithEmailAndPassword(auth, email, password);
} catch (err) {
  return console.error(err);
  
}
};
export{
  auth, logInWithEmailAndPassword
};