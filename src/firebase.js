import { initializeApp } from "firebase/app";
import apiKey from './../apiKey'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain: "slava-bots.firebaseapp.com",
  projectId: "slava-bots",
  storageBucket: "slava-bots.appspot.com",
  messagingSenderId: "954979304441",
  appId: "1:954979304441:web:4be7a03374c4abf66c7328"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig)

export default fireApp
