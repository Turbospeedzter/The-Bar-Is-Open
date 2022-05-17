import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBip8BGNYJTDbA_AAJBdqL8Q68PjkfGIrI",
    authDomain: "the-bar-is-open.firebaseapp.com",
    projectId: "the-bar-is-open",
    storageBucket: "the-bar-is-open.appspot.com",
    messagingSenderId: "783142556063",
    appId: "1:783142556063:web:2180a0353374b800fcedaa"
  }

  //initialize firebase--this connects to the back-end for us.
  firebase.initializeApp(firebaseConfig)

  //initialize services--store in a constant variable
  const projectFirestore = firebase.firestore()

  export { projectFirestore }
