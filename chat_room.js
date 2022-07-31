// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBYU5CxEB9xMymWDigi3jiG1GxnNCKXfNU",
  authDomain: "class-test-2ef48.firebaseapp.com",
  databaseURL: "https://class-test-2ef48-default-rtdb.firebaseio.com",
  projectId: "class-test-2ef48",
  storageBucket: "class-test-2ef48.appspot.com",
  messagingSenderId: "803594080286",
  appId: "1:803594080286:web:42f67ede465247d94e1e0f",
  measurementId: "G-M67KW3FF6P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
  room_name = document.getElementById("room_name.value");
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

   Room_names = childKey;
  //Start code
  console.log("Room Name-" + room_name);
  row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML +=row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
