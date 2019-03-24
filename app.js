const listaUsuarios = document.getElementById('lista-usuarios');

// crear elemento de la lista & renderizarlo
function renderUsers(doc){ 

    var nuevaFila   = listaUsuarios.insertRow(1);
    var nuevaCeldaID  = nuevaFila.insertCell(0);
    var nuevaCeldaCID  = nuevaFila.insertCell(1);
    var nuevaCeldaUID  = nuevaFila.insertCell(2);
    var nuevaCeldaURL  = nuevaFila.insertCell(3);
    var nuevaCeldaDATE  = nuevaFila.insertCell(4);
    
    nuevaCeldaID.innerHTML = doc.data().id;
    nuevaCeldaCID.innerHTML = doc.data().ClientID;
    nuevaCeldaUID.innerHTML = doc.data().UserID;
    nuevaCeldaURL.innerHTML = doc.data().Query;
    nuevaCeldaDATE.innerHTML = doc.data().Fecha;

}

// getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });


// real-time listener
db.collection('Users').orderBy('ClientID').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderUsers(change.doc);
            console.log(db.data);
        } 
    });
});


// updating records (console demo)
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });

// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     city: 'hong kong'
// });

// setting data
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
//     city: 'hong kong'
// });
