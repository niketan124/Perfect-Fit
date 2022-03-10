import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDQoBxspAf0fc7qIB0lPyB5wIRN2sq_Jd0",
    authDomain: "perfect-fit-db.firebaseapp.com",
    projectId: "perfect-fit-db",
    storageBucket: "perfect-fit-db.appspot.com",
    messagingSenderId: "1045109082863",
    appId: "1:1045109082863:web:23516bdfe806fe5643691a",
    measurementId: "G-6XKLT9Y9P9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;