import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCN4gpaAXlZxCZuaNscmoMYboh5xNr45f0",
  authDomain: "snapshot-bd0a5.firebaseapp.com",
  projectId: "snapshot-bd0a5",
  storageBucket: "snapshot-bd0a5.firebasestorage.app",
  messagingSenderId: "204455033669",
  appId: "1:204455033669:web:4a57be83fa2addbdc79c2c",
  measurementId: "G-6492RD4NNW",
};

const app = () => {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase.config.js"
    );
  } else {
    console.log("Firebase initialized successfully");
  }
  return initializeApp(firebaseConfig);
};
