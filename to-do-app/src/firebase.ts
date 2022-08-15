import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB2Ahf6oum51JW-caTFm2KLBXRJnaxMPeM',
    authDomain: 'todoapp-3da4c.firebaseapp.com',
    projectId: 'todoapp-3da4c',
    storageBucket: 'todoapp-3da4c.appspot.com',
    messagingSenderId: '471102714755',
    appId: '1:471102714755:web:85b201b6917536cda37cb6',
    measurementId: 'G-2M8LQ8XNH5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
