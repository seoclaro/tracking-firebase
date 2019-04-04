<script src="https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.3/firebase-firestore.js"></script>
<script>
	var config = {
		apiKey: "AIzaSyDIUHrPIp7IfSajl9tbyCD-YRL-Il5TOtc",
		authDomain: "trackingapp-c337c.firebaseapp.com",
		databaseURL: "https://trackingapp-c337c.firebaseio.com",
		projectId: "trackingapp-c337c",
		storageBucket: "trackingapp-c337c.appspot.com",
		messagingSenderId: "121473508567"
	};
	firebase.initializeApp(config);
	const db = firebase.firestore();
	db.settings({ timestampsInSnapshots: true });

	console.log(db);

	try {
    db.collection('Users').add({
				ClientID: ga.getAll()[0].get('clientId'),
				Query: window.location.href,
				Fecha: new Date(),
				UserID: "0"
    });

  } catch(e) {
		console.log("Error al acceder al objeto ga");
  }
</script>
