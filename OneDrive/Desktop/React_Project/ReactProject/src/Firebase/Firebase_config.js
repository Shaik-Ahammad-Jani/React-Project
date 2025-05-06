// Firebase_config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPTflguEJCXnq9c-zBkLZ2-rV6mktCj5w",
  authDomain: "programming-learning-course.firebaseapp.com",
  projectId: "programming-learning-course",
  storageBucket: "programming-learning-course.appspot.com",
  messagingSenderId: "361944098568",
  appId: "1:361944098568:web:e8353d3b9b57021bcf2ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
