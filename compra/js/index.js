"use strict"

function cambiarNumero(){
  let numeroActual =document.getElementById("UnidadAct").innerHTML;
   let numeroActualInt = parseInt(numeroActual);
    if (numeroActual < 10) {
        document.getElementById("UnidadAct").innerHTML = numeroActualInt + 1;
    } else {
        document.getElementById("UnidadAct").innerHTML = numeroActualInt;
     }
     calcularTotal();
}
function retornarNumero() {
    let antiguoNumero = document.getElementById("UnidadAct").innerHTML;
    let anNumero = parseInt(1);
    if (antiguoNumero > 0){
        document.getElementById("UnidadAct").innerHTML = antiguoNumero - anNumero;
    }else {
        document.getElementById("UnidadAct").innerHTML = antiguoNumero;
    }
    calcularTotal();
}
 function calcularTotal (){
     let valorUnidad = document.getElementById("tolal").innerHTML;
     let cantidad =document.getElementById("UnidadAct").innerHTML;
     let costoTota = valorUnidad * cantidad;
     document.getElementById("totalFinal").innerHTML = costoTota
    
 }