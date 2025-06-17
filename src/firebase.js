// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-UFiOCkndffZYrLt814SDgYmKDF9Buqo",
  authDomain: "easypaz-bd518.firebaseapp.com",
  projectId: "easypaz-bd518",
  storageBucket: "easypaz-bd518.firebasestorage.app",
  messagingSenderId: "398645983082",
  appId: "1:398645983082:web:ede6778ba1290f343d9713",
  measurementId: "G-GHJZEZZ5FK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
