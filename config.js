import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAwu1n3Bbt0hPrI4EFI4MZPVDN5pS34x_k",
    authDomain: "barter-app-89e5d.firebaseapp.com",
    projectId: "barter-app-89e5d",
    storageBucket: "barter-app-89e5d.appspot.com",
    messagingSenderId: "963910172560",
    appId: "1:963910172560:web:43b5e7adaf90bb51bc3d15"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()