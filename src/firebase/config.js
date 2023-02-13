import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Authentication we have only took the Email Authentication form Firebase.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_DI,
  appId: process.env.REACT_APP_APPLICATION_ID,
};

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

//init service for auth
const projectAuth = firebase.auth();

// init storage
const projectStorage = firebase.storage();

//timestamp
// to have a time stamp when the user logged in or out from the App and it's form Firebase
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectStorage, projectAuth, timestamp };
