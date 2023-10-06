// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_8n-jYgN0ZZpdwipZqunuATkwUZl-6M0",
  authDomain: "auth-milon-71566.firebaseapp.com",
  projectId: "auth-milon-71566",
  storageBucket: "auth-milon-71566.appspot.com",
  messagingSenderId: "594446199531",
  appId: "1:594446199531:web:269a2406717a5715f62cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;