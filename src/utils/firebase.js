import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAS6YvFStrh8h2qA-xdivsCawIKqp1LA58",
    authDomain: "react-project-c5b4a.firebaseapp.com",
    projectId: "react-project-c5b4a",
    storageBucket: "react-project-c5b4a.appspot.com",
    messagingSenderId: "346613289096",
    appId: "1:346613289096:web:7e0eff571da82f6d5ecf3d"
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase