const firebaseConfig = {
  apiKey: "AIzaSyDyGzfdBBCpUUNZGeCHmsfHg4wm6Os_rO8",
  authDomain: "warmwhite-9409e.firebaseapp.com",
  projectId: "warmwhite-9409e",
  storageBucket: "warmwhite-9409e.appspot.com",
  messagingSenderId: "996857193254",
  appId: "1:996857193254:web:3a2c04960fc61e585557e7",
  measurementId: "G-PSDVPNVPKT",
  databaseURL: "https://warmwhite-9409e-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
firebase.analytics();
var database = firebase.database();

// data write 
function writeUserData() {
  const rand_0_99 = Math.floor(Math.random() * 100);
  firebase.database().ref('waiting_line/'+rand_0_99).set({
      id: rand_0_99,
      name: 'asdf'
  });
}

function createAuth(){
  const email=document.getElementById("strId").value;
  const password=document.getElementById("strId").value;
  alert(email);
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

function loginAuth(){
  const email=document.getElementById("strId").innerText;
  const password=document.getElementById("strId").innerText;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
// data load
window.onload=function (){
  var starCountRef = database.ref('waiting_line/');
  starCountRef.on('value', function(snapshot) {
      alert(JSON.stringify(snapshot));
  });
}