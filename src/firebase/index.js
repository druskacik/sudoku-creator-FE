import firebase from 'firebase';

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sudoku-creator.firebaseapp.com",
  databaseURL: "https://sudoku-creator.firebaseio.com",
  storageBucket: "bucket.appspot.com"
})

const database = firebase.database();

export default database;