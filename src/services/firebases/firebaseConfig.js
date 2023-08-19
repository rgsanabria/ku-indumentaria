import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAZ1CdPmWMhyBL8avoGwOXneh_EkqN7X2g",
    authDomain: "ku-ecommerce.firebaseapp.com",
    projectId: "ku-ecommerce",
    storageBucket: "ku-ecommerce.appspot.com",
    messagingSenderId: "302631255696",
    appId: "1:302631255696:web:563a0e1279854f841ea215"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
