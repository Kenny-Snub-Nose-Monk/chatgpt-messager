// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmgERSAzEXqtLY8_RZUBDH22Me2XVFP2g",
  authDomain: "chatgpt-messenger-ty.firebaseapp.com",
  projectId: "chatgpt-messenger-ty",
  storageBucket: "chatgpt-messenger-ty.appspot.com",
  messagingSenderId: "552634513396",
  appId: "1:552634513396:web:bab279923be7fe2cd72ba1",
  measurementId: "G-VBQ9844KKE"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

