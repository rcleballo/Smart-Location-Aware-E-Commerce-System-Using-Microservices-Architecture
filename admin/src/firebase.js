// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB92emSzI3N27e06SBx6pDvdqTnIs7yieE",
  authDomain: "smart-location-aware-ecommerce.firebaseapp.com",
  projectId: "smart-location-aware-ecommerce",
  storageBucket: "smart-location-aware-ecommerce.appspot.com",
  messagingSenderId: "60687856040",
  appId: "1:60687856040:web:3971c530b0ec14ceea2d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
