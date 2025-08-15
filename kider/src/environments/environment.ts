import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCneBFspePcMU6uvsK1sM_gut8yx00LskY',
    authDomain: 'kider-faf82.firebaseapp.com',
    projectId: 'kider-faf82',
    storageBucket: 'kider-faf82.firebasestorage.app',
    messagingSenderId: '359843086115',
    appId: '1:359843086115:web:59390653f04a029b865696',
    measurementId: 'G-WMLXJ2EQEV',
  },
};
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
