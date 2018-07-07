// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyB9A1L-PLlqChOgLjjbhEGUb_nEQ2RSR9k",
//     authDomain: "train-schedule-homework-d25ce.firebaseapp.com",
//     databaseURL: "https://train-schedule-homework-d25ce.firebaseio.com/",
//     projectId: "train-schedule-homework-d25ce",
//     storageBucket: "train-schedule-homework-d25ce.appspot.com",
//     messagingSenderId: "347936640490"
//   };
//   firebase.initializeApp(config);
//   var database = firebase.database();
// console.log(config);

// $(document).on("click", "#add-route-button", function(event) { 
//      console.log("add-route-button pressed")
//     event.preventDefault();

// var destination = $("#destination-input").val().trim();
// var frequency = $("#frequency-input").val().trim();
// console.log(destination);
// console.log(frequency)
// var newRoute = {
//     newDes: destination,
//     newFreq: frequency,
//   };
//   database.ref().push(newRoute);
//   console.log(newRoute.newDes);
//   console.log(newRoute.newFreq);

//   alert("Route successfully added");
  
//   $("#destination-input").val("");
//   $("#frequency-input").val("");

//   database.ref().on("child_added", function(childSnapshot) {
//     console.log(childSnapshot.val());
//     var destination = childSnapshot.val().newDes;
//     var frequency = childSnapshot.val().newFreq;
//     console.log(destination);
//     console.log(frequency);
//     // console.log(newDes);
//     console.log(newFreq);

//     var newRow = $("<tr>").append(
//         $("<td>").text(newDes),
//         $("<td>").text(newFreq),
//     );
//     $("#employee-table > tbody").append(newRow);
//   });
// });

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB9A1L-PLlqChOgLjjbhEGUb_nEQ2RSR9k",
    authDomain: "train-schedule-homework-d25ce.firebaseapp.com",
    databaseURL: "https://train-schedule-homework-d25ce.firebaseio.com/",
    projectId: "train-schedule-homework-d25ce",
    storageBucket: "train-schedule-homework-d25ce.appspot.com",
    messagingSenderId: "347936640490"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
console.log(config);

$(document).on("click", "#add-route-button", function(event) { 
     console.log("add-route-button pressed")
    event.preventDefault();

var destination = $("#destination-input").val().trim();
var frequency = $("#frequency-input").val().trim();

var newRoute = {
    newDes: destination,
    newFreq: frequency,
  };

  database.ref().push(newRoute);
  console.log(newRoute);
console.log(newRoute.newDes);
console.log(newRoute.newFreq);

  alert("Route successfully added");
  
  $("#destination-input").val("");
  $("#frequency-input").val("");
});

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    var newDes = childSnapshot.val().newDes;
    var newFreq = childSnapshot.val().newFreq;

    
    console.log(newDes);
    console.log(newFreq);
    
    var newRow = $("<tr>").append(
        $("<td>").append(newDes),
        $("<td>").append(newFreq),
        $("<td>").append("" + "minute(s)")
    );
    $("#train-table > tbody").append(newRow);
  
});