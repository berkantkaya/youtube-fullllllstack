import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAWD-4F83Rg4rbpaDzYjc_E-fnUW1sqDDM",
    authDomain: "clone-full-40b46.firebaseapp.com",
    projectId: "clone-full-40b46",
    storageBucket: "clone-full-40b46.appspot.com",
    messagingSenderId: "246363527578",
    appId: "1:246363527578:web:d9b36232985f0700c48223"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()