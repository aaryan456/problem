import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBiTnON9ZjdRimGBF_WtHAO-oKxTeNevnA",
    authDomain: "transaction-34fe1.firebaseapp.com",
    databaseURL: "https://transaction-34fe1.firebaseio.com",
    projectId: "transaction-34fe1",
    storageBucket: "transaction-34fe1.appspot.com",
    messagingSenderId: "1047206515395",
    appId: "1:1047206515395:web:66dff6aa8720fd4fc24876"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()