import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: 'AIzaSyDI3lUc4QjYBdRUaTVqI6r0neyocpSuW40',
    authDomain: 'tekken-info.firebaseapp.com',
    databaseURL: 'https://tekken-info-default-rtdb.firebaseio.com',
    projectId: 'tekken-info',
    storageBucket: 'tekken-info.appspot.com',
    messagingSenderId: '482493151012',
    appId: '1:482493151012:web:cc3227418248134488a5b1',
});

const db = firebase.firestore();
export default db;
