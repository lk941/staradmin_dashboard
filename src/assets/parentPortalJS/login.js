// get ref to the db server
var database = firebase.database();

// getting info from db

var userRef = database.ref('user');
userRef.on('value', function(snapshot) {
    snapshot.foreach(function(childSnapshot) {
        var childData = childSnap.val();
    });
});

// read from firebase to log users in
