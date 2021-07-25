import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  // apiKey: "Your API Key here",
  // authDomain: "blah",
  // projectId: "blah",
  // storageBucket: "blah",
  // messagingSenderId: "blah",
  // appId: "blah",

  apiKey: "AIzaSyDgRJ4sHJ6MZY3vRAoSUPojP98NIjvRymQ",
  authDomain: "chateasy-7569b.firebaseapp.com",
  projectId: "chateasy-7569b",
  storageBucket: "chateasy-7569b.appspot.com",
  messagingSenderId: "601261175079",
  appId: "1:601261175079:web:20b4071fd7b55cb9dab902",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
