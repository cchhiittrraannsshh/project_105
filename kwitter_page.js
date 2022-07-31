// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfqzvVf5_11cucO8tPFkN7CSIAp3n0ulo",
    authDomain: "project-103-32134.firebaseapp.com",
    databaseURL: "https://project-103-32134-default-rtdb.firebaseio.com",
    projectId: "project-103-32134",
    storageBucket: "project-103-32134.appspot.com",
    messagingSenderId: "495558413391",
    appId: "1:495558413391:web:916259c7add365810dee3a",
    measurementId: "G-YNX36SLQFX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });

      document.getElementById("msg").value = "";

      function getData() {firebase.database().ref("/"+room_name).on('value',
       function(snapshot) { document.getElementByld("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData =
             childSnapshot.val(); if(childKey != "purpose") {
                    firebase_message_id = childKey;
                     message_data = childData;
                      //Start code

                      console.log(firebase_message_id);
 console.log("mage_data");
 name = message_data['name'];
 message = message_data['meaasge'];
 like = message_data['lke'];
 name_with_tag = "<h4>" + name + "</h4>";
 message_with_tag = "<h4 class = 'message_h4'>"+ message + "</h4>";
 message_with_tag = "<button class='btn btn-warning' id="+firebase_message_id+"value = "+like+"onclick='updateLike(this.id)'>Likes :"+like+"</button>";

 row = name_with_tag + message_with_tag + like_button;
 document.getElementById("output").innerHTML +=row;

 
 function updateLike(message_id)
 {
   console.log("clicked on like button - " +message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   update_likes = Number(likes) + 1;
   console.log(update_likes);
   
   firebase.database().ref(room_name).child(message_id).update({
     like : update_likes
   });
 }

 function logout()
 {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location.reload("kwitter_room.html");
 }

                      //End code 
             } }); }); } 
             getData(); 
            

}
      localStorage.getItem("user_name", user_name);
      localStorage.getItem("room_name", room_name);
      window.location = "index.html";