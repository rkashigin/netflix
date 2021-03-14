import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_0KElLLjmO8TWdrBFzcYk7t5dleKfgV0",
  authDomain: "netflix-e72e7.firebaseapp.com",
  projectId: "netflix-e72e7",
  storageBucket: "netflix-e72e7.appspot.com",
  messagingSenderId: "240446961368",
  appId: "1:240446961368:web:a48da71683536fdcb1c9ad",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
