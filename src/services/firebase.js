import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "Your API Key here",
  authDomain: "blah",
  projectId: "blah",
  storageBucket: "blah",
  messagingSenderId: "blah",
  appId: "blah",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
