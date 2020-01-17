import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
