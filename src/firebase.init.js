// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLGbfD5mMnJI0AySaOCzT0JryPVtMiYA4",
    authDomain: "coffee-store-9e89b.firebaseapp.com",
    projectId: "coffee-store-9e89b",
    storageBucket: "coffee-store-9e89b.firebasestorage.app",
    messagingSenderId: "103498874421",
    appId: "1:103498874421:web:96a56268777b4c18623b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)