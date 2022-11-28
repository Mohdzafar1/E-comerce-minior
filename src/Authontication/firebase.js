import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAwbBuM_K3SchXMmVNzZ4KNl9hrFVhwXmQ",
  authDomain: "e-comerce-4f812.firebaseapp.com",
  projectId: "e-comerce-4f812",
  storageBucket: "e-comerce-4f812.appspot.com",
  messagingSenderId: "425348615118",
  appId: "1:425348615118:web:a903d1fe71d8447874399f",
  measurementId: "G-C8HJSZ7ZL9"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;