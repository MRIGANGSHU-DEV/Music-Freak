// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (Replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyDUkLtrV7tftwmo6Ur_mR19hGrqYf1cQ0M",
    authDomain: "music-freak-16f6e.firebaseapp.com",
    projectId: "music-freak-16f6e",
    storageBucket: "music-freak-16f6e.firebasestorage.app",
    messagingSenderId: "1045931756519",
    appId: "1:1045931756519:web:7a326ca199fa7f08f84b42",
    measurementId: "G-0SR3GBFD7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
