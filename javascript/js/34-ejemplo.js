"use strict"

let nombreActual="";

function cambiarNombre(){
    let nuevoNombre ="INGRID";
    /*VALIDAR*/
    nombreActual =document.getElementById("nombreAprendiz").innerHTML;
    if (nombreActual == nuevoNombre) {
        mensajeUsuario ();
    } else {
        document.getElementById("nombreAprendiz").innerHTML = nuevoNombre;
     }
}
function retornarNombre() {
    let antiguoNombre = "Maryury";
    nombreActual = document.getElementById("nombreAprendiz").innerHTML;
    if (nombreActual === antiguoNombre){
        mensajeUsuario ();
    }else {
        document.getElementById("nombreAprendiz").innerHTML = antiguoNombre;
    }
}
 function    mensajeUsuario (){
     alert ("el nombre ya fue cambiado con anterioridad");
 }