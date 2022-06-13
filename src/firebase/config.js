// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzRrV90EqnTwZIul37NpecMHO14DmV9Wo",
    authDomain: "miniblog-811d7.firebaseapp.com",
    projectId: "miniblog-811d7",
    storageBucket: "miniblog-811d7.appspot.com",
    messagingSenderId: "151481022142",
    appId: "1:151481022142:web:aaaaf3d5c8282554a350ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };