// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC7NokEtUFq7maL2XMpnpdVKwk-TIOh2HE',
  authDomain: 'farmconnect-bd0fc.firebaseapp.com',
  projectId: 'farmconnect-bd0fc',
  storageBucket: 'farmconnect-bd0fc.appspot.com',
  messagingSenderId: '1002436213815',
  appId: '1:1002436213815:web:bbcc6acd4a9a4fdac113b2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
