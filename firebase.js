import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore";
import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    MEASUREMENT_ID
} from '@env' //From the .env file

const app = firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: MEASUREMENT_ID 
});

export const db = app.firestore();
//db = (database), reference to overall firestore

export const auth = app.auth()
//Authentication

export const batch = db.batch()
export const provider = new firebase.auth.GoogleAuthProvider() 
//If you want google sign-in

export default app