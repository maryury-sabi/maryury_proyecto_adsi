"use strict"


function validarInfo(numeroDocumento){
    let numDocumento = document.getElementById(numeroDocumento).value;
    
}

if(numDocumento === ""){
    alert("El número del documento es obligatorio");
}
else{
    alert("la informacion ha sido enviada con éxito!!");
}