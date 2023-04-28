import { initializeApp } from "firebase/app";

import { collection, getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDTlny7yz8GxygumBTbUKAbkwotkojb9cw",
  authDomain: "codepoll.firebaseapp.com",
  projectId: "codepoll",
  storageBucket: "codepoll.appspot.com",
  messagingSenderId: "866030097317",
  appId: "1:866030097317:web:5fcec725834b19bd7d8e4c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth()
export const postColRef = collection(db,"posts");
export const UserColRef = collection(db,"users");
export const CatsColRef = collection(db,"cats");