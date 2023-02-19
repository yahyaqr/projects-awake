import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAcBLTRY7XLFG1dqyA67xm-6kqrxCxRT1Y',
  authDomain: 'beforemidnight-awake-android.firebaseapp.com',
  databaseURL:
    'https://beforemidnight-awake-android-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'beforemidnight-awake-android',
  storageBucket: 'beforemidnight-awake-android.appspot.com',
  messagingSenderId: '923282210074',
  appId: '1:923282210074:web:906ce4d19f891a6c9c80a3',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
