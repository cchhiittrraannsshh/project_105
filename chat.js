// Your web app's Firebase configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEpU8FPenJg1QQr1-m9884-IAhU1G6mGg",
    authDomain: "project-100-b7db0.firebaseapp.com",
    databaseURL: "https://project-100-b7db0-default-rtdb.firebaseio.com",
    projectId: "project-100-b7db0",
    storageBucket: "project-100-b7db0.appspot.com",
    messagingSenderId: "393071451108",
    appId: "1:393071451108:web:ade5c589f5f9a300e4c5f1",
    measurementId: "G-L01CLRT2WZ"
  };
  
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



