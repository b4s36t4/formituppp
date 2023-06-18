import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvgkIydRWbxXwrVMAvi7vgeQ3Lv3vhf4c",
  authDomain: "new-formitup.firebaseapp.com",
  projectId: "new-formitup",
  storageBucket: "new-formitup.appspot.com",
  messagingSenderId: "10835189171",
  appId: "1:10835189171:web:b993d78f1421b8696f7fc6",
  measurementId: "G-F4FTMW9961",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
