
   var firebaseConfig = {
    apiKey: "AIzaSyBxPzo1ObPL4tLhkVfvscnTn9XnKvV80KA",
    authDomain: "test-formw.firebaseapp.com",
    projectId: "test-formw",
    storageBucket: "test-formw.appspot.com",
    messagingSenderId: "872169311092",
    appId: "1:872169311092:web:caf3cf50f024dfb787ba21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
 
// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let message = document.querySelector(".message").value;
  console.log(name,message);

  saveContactInfo(name,message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    message: message,
  });
}