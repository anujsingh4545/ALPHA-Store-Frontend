// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1wI3Gzdg9xxoU0rJx_obn4ARdDD5Pqf4",
  authDomain: "alpha--store.firebaseapp.com",
  projectId: "alpha--store",
  storageBucket: "alpha--store.appspot.com",
  messagingSenderId: "787638201073",
  appId: "1:787638201073:web:6c617c0a9814e165ee1750",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
