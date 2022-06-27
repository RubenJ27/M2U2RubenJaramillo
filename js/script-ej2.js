/* Desarrolle un algoritmo que permita:
f. Leer cuatro valores numéricos y almacenarlos en las variables A, B, C y D
respectivamente.
g. El algoritmo debe imprimir cual es el mayor valor y cual es el menor valor. Recuerde
verificar que los cuatro valores introducidos por el teclado sean valores distintos.
h. Crear un mensaje de alerta en caso que se detecte la introducción de valores iguales.*/


let $form = document.getElementById("container__validator__form");
let $valueOne = document.getElementById("numOne");
let $valueTwo = document.getElementById("numTwo");
let $valueThree = document.getElementById("numThree");
let $valueFour = document.getElementById("numFour");

let $btnValidator = document.getElementById("btn__validator");

let $btnClean = document.getElementById("btn__clean");

document.addEventListener("submit", e=> {

  if (e.target === $form) {
    e.preventDefault();
    console.log("start")
  }
});

document.addEventListener("click", e=> {
  if (e.target === $form.cerrar) {
    $valueOne.value = "";
    $valueTwo.value = "";
    $valueThree.value = "";
    $valueFour.value = "";
  }
});





