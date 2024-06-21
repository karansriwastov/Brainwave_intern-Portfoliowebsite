const firebaseConfig = {
    apiKey: "AIzaSyB_5ufGoj8-u39X_4LkoXlIkSOhPGB57QE",
    authDomain: "contact-form-b12fa.firebaseapp.com",
    databaseURL: "https://contact-form-b12fa-default-rtdb.firebaseio.com",
    projectId: "contact-form-b12fa",
    storageBucket: "contact-form-b12fa.appspot.com",
    messagingSenderId: "892055629854",
    appId: "1:892055629854:web:9dcb440b0bcec146997e0f",
    measurementId: "G-CXQ2S7ZLDH"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var ContactFormDB = firebase.database().ref("contactform");

  document.getElementById('contactform').addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('clientname');
    var clientmail = getElementVal('clientmail');
    var clientphone = getElementVal('clientphone');
    var clientenquiry = getElementVal('clientenquiry');

    saveMessages(name, clientmail, clientphone, clientenquiry );

    //enable alert
    document.querySelector(".alert").style.display = "block";

    //remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset thr form
    document.getElementById("contactform").reset()
    
  }

  const saveMessages = (name, clientmail, clientphone, clientenquiry) => {
    var newContactForm = ContactFormDB.push();

    newContactForm.set({
      name : name,
      clientmail : clientmail,
      clientphone :clientphone,
      clientenquiry : clientenquiry
    });
  };

  const getElementVal =(id) => {
    return document.getElementById(id).value;
  }