var statLdr = document.getElementById('statLdr');
var dbRef = firebase.database().ref().child('LDR');

dbRef.on('value', snap => statLdr.innerText = snap.val());
