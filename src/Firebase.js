import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAIOBcJk379yYAl7b7yGzmMXCckwW4B82E",
    authDomain: "real-time-chat-app-a5747.firebaseapp.com",
    projectId: "real-time-chat-app-a5747",
    storageBucket: "real-time-chat-app-a5747.appspot.com",
    messagingSenderId: "436141886842",
    appId: "1:436141886842:web:52ac60c52a45e66a7e5ac3",
    measurementId: "G-NM4GWMZYZ7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};