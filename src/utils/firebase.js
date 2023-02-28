// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDLuPrjONrH3eJIzTKl1zX5V2PwDuJ4kXQ',
	authDomain: 'musicfy-2d138.firebaseapp.com',
	projectId: 'musicfy-2d138',
	storageBucket: 'musicfy-2d138.appspot.com',
	messagingSenderId: '1024584648264',
	appId: '1:1024584648264:web:72baa4997d93b9efb7fa7d',
};

export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
