import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
} from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: 'AIzaSyDI3lUc4QjYBdRUaTVqI6r0neyocpSuW40',
    authDomain: 'tekken-info.firebaseapp.com',
    databaseURL: 'https://tekken-info-default-rtdb.firebaseio.com',
    projectId: 'tekken-info',
    storageBucket: 'tekken-info.appspot.com',
    messagingSenderId: '482493151012',
    appId: '1:482493151012:web:cc3227418248134488a5b1',
});

const db = getFirestore(firebaseApp);
export default db;
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider)
        .then(() => {
            console.log('안녕하세요');
        })
        .catch((err) => {
            console.log(err);
            alert('로그인 중 오류 발생. 에러 코드 ' + err);
        });
};

export const logOut = () => {
    auth.signOut()
        .then(() => {
            console.log('logged out');
        })
        .catch((error) => {
            console.log(error.message);
        });
};
