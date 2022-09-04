const firebaseConfig = {
 
    apiKey: "AIzaSyDz6d534bsXsigEVTQh_BRUCxnyAlUN4WM",
    authDomain: "xinrm-db.firebaseapp.com",
    databaseURL: "https://xinrm-db-default-rtdb.firebaseio.com",
    projectId: "xinrm-db",
    storageBucket: "xinrm-db.appspot.com",
    messagingSenderId: "728692677396",
    appId: "1:728692677396:web:3d5a76ff416f6a91618001"
  //   copy your firebase config informations
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB1 = firebase.database().ref("details");

document.getElementById("details").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var a0=getElementVal("s0")
  var a1=getElementVal("s1")
  var a2=getElementVal("s2")
  var a3=getElementVal("s3")
  var a4=getElementVal("s4")
  var a5=getElementVal("s5")
  var a6=getElementVal("s6")
  var a7=getElementVal("s7")
  var a8=getElementVal("s8")
  var a9=getElementVal("s9")
  var a10=getElementVal("s11")


  saveMessages1(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("details").reset();
}

const saveMessages1 = (a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) => {
  var newContactForm1 = contactFormDB1.push();

  newContactForm1.set({
    a0:a0,
    a1:a1,
    a2:a2,
    a3:a3,
    a4:a4,
    a5:a5,
    a6:a6,
    a7:a7,
    a8:a8,
    a9:a9,
    a10:a10
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

getDocs(saveMessages).then((snapshot)=>{
  console.log(snapshot.docs)
});
