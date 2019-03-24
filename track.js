<script>
  // Recoger el valor del clientId de Analytics si existe
  
  try {
    var tracker = ga.getAll()[0];
    return tracker.get('clientId');
    console.log(tracker);
    // Enviar a bbdd el valor del clientId
  } catch(e) {
      console.log(“Error al acceder al objeto ga");
  }
  
  // Recoger el valor de la url donde está el usuario
  var valorHref = window.location.href;
  console.log(window.location.href);
  // Enviar a base de datos el valor de la url
  
  
  // Recoger el momento en el que el usuario está visitando la url
  var fecha = new Date();
  console.log(fecha);
  // Enviar a bbdd el valor de fecha


   // Comprobar si hay un form
  if (document.forms.length > 0){
    function enviarmail(){
      if(document.myform.onsubmit()){
        
        // Enviar email del form a bbdd junto con el clientID, la ruta y la fecha
      }
    }
  }

</script>
