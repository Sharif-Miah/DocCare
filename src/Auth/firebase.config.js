// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvSrHv4MVXZDXXvC5obeTkKQGLzyYx-s0",
    authDomain: "review-website-fbea4.firebaseapp.com",
    projectId: "review-website-fbea4",
    storageBucket: "review-website-fbea4.appspot.com",
    messagingSenderId: "1066651165634",
    appId: "1:1066651165634:web:72a55aaf7b6d8c0f81ac5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;