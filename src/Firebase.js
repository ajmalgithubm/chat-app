import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBHggc8ie4we0ubRoOuqSi-z664Quet_s",
    authDomain: "live-chat-9bee0.firebaseapp.com",
    projectId: "live-chat-9bee0",
    storageBucket: "live-chat-9bee0.appspot.com",
    messagingSenderId: "57444527834",
    appId: "1:57444527834:web:78172ea240cbab373bbfe3",
    measurementId: "G-PBNW15T8SM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseConfig);
export const db = getFirestore(firebaseConfig);