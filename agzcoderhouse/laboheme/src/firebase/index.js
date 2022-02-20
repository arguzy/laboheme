import firebase from 'firebase/app';
import 'firebase/firestore';

//const firebaseConfig = {
//  apiKey: process.env.REACT_APP_API_KEY,
//  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//  projectId: process.env.REACT_APP_PROJECT_ID,
//  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//  appId: process.env.REACT_APP_APP_ID,
//};

const firebaseConfig = {
  apiKey: "AIzaSyBu62yVJ7XlbvsLEP2rjz8DumsOM3Kr8sw",
  authDomain: "bohemeinventory.firebaseapp.com",
  projectId: "bohemeinventory",
  storageBucket: "bohemeinventory.appspot.com",
  messagingSenderId: "82455830141",
  appId: "1:82455830141:web:40718e338a80dad7361b14",
};



  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app;

  export const getFirestore = () => firebase.firestore(app);
