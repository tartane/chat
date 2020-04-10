import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDfKXAO2bRjM-vNpFv1U71Fnw3e6NLeaOk",
    authDomain: "chat-5d135.firebaseapp.com",
    databaseURL: "https://chat-5d135.firebaseio.com",
    projectId: "chat-5d135",
    storageBucket: "chat-5d135.appspot.com",
    messagingSenderId: "213253388482",
    appId: "1:213253388482:web:3501648ba9ba119dbaa35b",
    measurementId: "G-S6WQJDNNQC"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;