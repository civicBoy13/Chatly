import firebase from  'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdDJdIYLac87-MFV3dcOMAYseEGUNUIko",
    authDomain: "chatly-e84e3.firebaseapp.com",
    projectId: "chatly-e84e3",
    storageBucket: "chatly-e84e3.appspot.com",
    messagingSenderId: "756549005429",
    appId: "1:756549005429:web:18cb4859b5777942d5483c",
    measurementId: "G-GN6MFHG3J9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
export default {
    db,
    auth
}

