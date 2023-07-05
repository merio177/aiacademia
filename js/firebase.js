let firebaseConfig = {
   apiKey: "AIzaSyAIVs0LvCBjb29FBgjck_r5wHrKMspRJQU",
   authDomain: "aieducacao.firebaseapp.com",
   projectId: "aieducacao",
   storageBucket: "aieducacao.appspot.com",
   messagingSenderId: "875980109965",
   appId: "1:875980109965:web:59faae4146b87237bfcac4"
};

//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

let db = firebaseConfig.firestore();