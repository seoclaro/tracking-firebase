const listaUsuarios = document.getElementById('#lista-usuarios');

// crear elemento de la lista & renderizarlo
function renderUsers(doc){
    let tr = document.createElement('tr');
    let id = document.createElement('td');
    let clientid = document.createElement('td');
    let userid = document.createElement('td');
    let url = document.createElement('td');
    let fecha = document.createElement('td');    

    tr.setAttribute('data-id', doc.id);
    id.textContent = doc.data().id;
    clientid.textContent = doc.data().ClientID;
    userid.textContent = doc.data().UserID;
    url.textContent = doc.data().Query;
    fecha.textContent = doc.data().Fecha;        

    tr.appendChild(tr);
    tr.appendChild(id);
    tr.appendChild(clientid);
    tr.appendChild(userid);

    var nuevaFila   = listaUsuarios.insertRow(listaUsuarios.rows.length);
    var nuevaCelda  = nuevaFila.insertCell(0);
    var nuevoTexto  = document.createTextNode('Texto');
    nuevaCelda.appendChild(nuevoTexto);



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
            conlole.log(db.data)
        } 
    });
});

renderUsers(db.doc);

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