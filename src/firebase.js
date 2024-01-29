import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMctLoKgtRZ2KsO1WZuvh6r3YBWV1vxKE",
  authDomain: "multi-user-blog-771d2.firebaseapp.com",
  projectId: "multi-user-blog-771d2",
  storageBucket: "multi-user-blog-771d2.appspot.com",
  messagingSenderId: "496804093167",
  appId: "1:496804093167:web:19a5d3e9e6d38fd69a8f1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
