import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDVsKiM9hiA26BketrtI9zR9bzB8oqa7OA",
  authDomain: "meepoong-af0cc.firebaseapp.com",
  databaseURL: "https://meepoong-af0cc-default-rtdb.firebaseio.com",
  projectId: "meepoong-af0cc",
  storageBucket: "meepoong-af0cc.appspot.com",
  messagingSenderId: "468704156286",
  appId: "1:468704156286:web:05d556417839650c75962f",
  measurementId: "G-74L5VLF3JC"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();