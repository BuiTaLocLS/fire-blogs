/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB360vlR5903zjJH2PYz88xO_b45eWXgOY",
    authDomain: "fire-blogs-59e98.firebaseapp.com",
    projectId: "fire-blogs-59e98",
    storageBucket: "fire-blogs-59e98.appspot.com",
    messagingSenderId: "803235924769",
    appId: "1:803235924769:web:32f291447c55a0c0bd8c60"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serveTimestamp;

export { timestamp };
export default firebaseApp.firestore();