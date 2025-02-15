import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnO_mhAbU7ErmkBZpZaYa-GqtcWFev1Z4",
  authDomain: "networkc-2517f.firebaseapp.com",
  projectId: "networkc-2517f",
  storageBucket: "networkc-2517f.firebasestorage.app",
  messagingSenderId: "124910841974",
  appId: "1:124910841974:web:5c46fad98a492639d96f57",
  measurementId: "G-S2JB2DH129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const getCurrentUser = () => auth.currentUser;