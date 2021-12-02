import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCL4VWK1Q5Rb-OZUSboRN98xYteNoBEGH4",
    authDomain: "blog-con-react.firebaseapp.com",
    databaseURL:"https://blog-con-react-default-rtdb.firebaseio.com/",
    projectId: "blog-con-react",
    storageBucket: "blog-con-react.appspot.com",
    messagingSenderId: "157979570764",
    appId: "1:157979570764:web:93e0214b49df6b328c7ae9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase



/*var firebaseConfig = {
    apiKey: "AIzaSyADuj1dd5IViphIv_CU8V-ESD9dQDMFTPw",
    authDomain: "fintech-blog-db.firebaseapp.com",
    databaseURL: "https://fintech-blog-db-default-rtdb.firebaseio.com",
    projectId: "fintech-blog-db",
    storageBucket: "fintech-blog-db.appspot.com",
    messagingSenderId: "984676075442",
    appId: "1:984676075442:web:41b3e13ca8f352815ac6ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase*/