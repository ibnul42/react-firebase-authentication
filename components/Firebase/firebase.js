// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXwA63M7wcLZUyszBbYl00ZzctJ3fVOW4",
  authDomain: "react-firebase-authentic-41805.firebaseapp.com",
  projectId: "react-firebase-authentic-41805",
  storageBucket: "react-firebase-authentic-41805.appspot.com",
  messagingSenderId: "719324309854",
  appId: "1:719324309854:web:6882ccd6542e34b08b47cf",
  measurementId: "G-YB9PKZ1J9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);