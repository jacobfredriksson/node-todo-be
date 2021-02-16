import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCPuQPnagOo8ocbOQiQoW6nyomqIFOl_Q4",
  authDomain: "todo-app-8a458.firebaseapp.com",
  projectId: "todo-app-8a458",
  storageBucket: "todo-app-8a458.appspot.com",
  messagingSenderId: "287829317213",
  appId: "1:287829317213:web:57e5d5754cec92056e9fb4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db
