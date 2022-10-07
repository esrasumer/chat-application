import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDX-_snT3bmUAP8mialnVw2gfvrHHptnPo",
    authDomain: "chat-7de00.firebaseapp.com",
    projectId: "chat-7de00",
    storageBucket: "chat-7de00.appspot.com",
    messagingSenderId: "77829358391",
    appId: "1:77829358391:web:8807037d4db6382503d0b2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();