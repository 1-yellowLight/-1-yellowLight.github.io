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
var db = firebase.firestore();

// data write 
function writeUserData(uid,title,text) {
  console.log(uid);
  console.log(title);
  console.log(text);
  db.collection(uid).add({
    date: new Date().toLocaleString(),
    title: title,
    text: text
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

function createAuth(){
  let email=document.getElementById("strId").value;
  let password=document.getElementById("strId").value;
  const info=document.getElementById("info");
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    info.style.display='block';
    info.style.color='tomato';
    info.innerHTML="Congratulations on joining! Sign in!";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    info.style.display='block';
    info.style.color='tomato';
    info.innerHTML=errorCode+' : '+errorMessage;
  });
}

function loginAuth(){
  const email=document.getElementById("strId").value;
  const password=document.getElementById("strId").value;
  const info=document.getElementById("info");
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      const strUid=JSON.stringify(user.uid).replace(/"/gi, ""); 
      const strEmail=JSON.stringify(user.email).replace(/"/gi, ""); 
      location.href="/index.html?uid="+strUid;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      info.style.display='block';
      info.style.color='tomato';
      info.innerHTML=errorCode+' : '+errorMessage;
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    info.style.display='block';
    info.style.color='tomato';
    info.innerHTML=errorCode+' : '+errorMessage;
  });
}