// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnT84Q-2RBHrN0bRmDwwu9oS0zgA0RbLk",
  authDomain: "netflix-gpt-b8004.firebaseapp.com",
  projectId: "netflix-gpt-b8004",
  storageBucket: "netflix-gpt-b8004.firebasestorage.app",
  messagingSenderId: "606976230912",
  appId: "1:606976230912:web:54f5f4219a725d2712bae5",
  measurementId: "G-74L9RXT006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);