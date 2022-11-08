// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjZFcdaWHCNYcdL47IZgVQecri9cayMqM",
  authDomain: "my-services-942c7.firebaseapp.com",
  projectId: "my-services-942c7",
  storageBucket: "my-services-942c7.appspot.com",
  messagingSenderId: "386290912824",
  appId: "1:386290912824:web:1a0e0749b63fad2bd1e0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;