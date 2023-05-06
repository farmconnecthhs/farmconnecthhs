// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC7NokEtUFq7maL2XMpnpdVKwk-TIOh2HE',
  authDomain: 'farmconnect-bd0fc.firebaseapp.com',
  projectId: 'farmconnect-bd0fc',
  storageBucket: 'farmconnect-bd0fc.appspot.com',
  messagingSenderId: '1002436213815',
  appId: '1:1002436213815:web:050a7cf19d04005bc113b2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// TODO remove this
console.log(app);
export const auth = getAuth();
