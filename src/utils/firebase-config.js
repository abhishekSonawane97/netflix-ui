// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyB6yMT3BzJg97mr75_xfT7NRpmBYLQJ4Ps",
  authDomain: "react-netflix-clone-4c6ca.firebaseapp.com",
  projectId: "react-netflix-clone-4c6ca",
  storageBucket: "react-netflix-clone-4c6ca.appspot.com",
  messagingSenderId: "759912806156",
  appId: "1:759912806156:web:7cf402a839169ad8d8fb29",
  measurementId: "G-VX4VBH5T27"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);