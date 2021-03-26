// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDDsItpJpo60ZoJFZwLMWc2Vj7tHyTvJ68",
    authDomain: "clone-1c5c4.firebaseapp.com",
    projectId: "clone-1c5c4",
    storageBucket: "clone-1c5c4.appspot.com",
    messagingSenderId: "990527761848",
    appId: "1:990527761848:web:5916f9b228f5846d15334d",
    measurementId: "G-9789CYJH3V"
};
//first initialize the firebase and then pass in the config stuff it will do everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

//create the database
const db = firebaseApp.firestore();

//next create the auth wich basically gives us a variable that helps us with signing in 
const auth = firebase.auth();

export {db, auth};

