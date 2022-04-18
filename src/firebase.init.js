// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-T6P5EDx-_B5eeKjeJ9VILUHbc-t3TPA",
    authDomain: "pump-house-shaahil.firebaseapp.com",
    projectId: "pump-house-shaahil",
    storageBucket: "pump-house-shaahil.appspot.com",
    messagingSenderId: "630683361919",
    appId: "1:630683361919:web:232f66c2b9ceabd9ca954a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;