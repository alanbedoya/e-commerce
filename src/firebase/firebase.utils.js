import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQCEEJYeVXPFMfEkRqP5MpDJebNrVKelg",
    authDomain: "e-commerce-db-fd422.firebaseapp.com",
    databaseURL: "https://e-commerce-db-fd422.firebaseio.com",
    projectId: "e-commerce-db-fd422",
    storageBucket: "e-commerce-db-fd422.appspot.com",
    messagingSenderId: "360224019077",
    appId: "1:360224019077:web:fc84510908ba041feecfec",
    measurementId: "G-DEQ78GCBEW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;