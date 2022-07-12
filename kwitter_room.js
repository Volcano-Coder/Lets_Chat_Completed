const firebaseConfig = {
      apiKey: "AIzaSyDwGs9CLCqgPbB4VlQ168EvU6ubvoZzINw",
      authDomain: "let-s-chat-d65c0.firebaseapp.com",
      databaseURL: "https://let-s-chat-d65c0-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-d65c0",
      storageBucket: "let-s-chat-d65c0.appspot.com",
      messagingSenderId: "1079461607265",
      appId: "1:1079461607265:web:9ef58389cf3895965db720"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log(Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}