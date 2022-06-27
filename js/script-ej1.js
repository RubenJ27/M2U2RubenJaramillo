/*Ejercicio 1
Crear un algoritmo que le permita al usuario ingresar:
a. Nombre de un estudiante,
b. Cantidad de materias o asignaturas a matricular.
c. Valor de cada materia o asignatura,
d. Valor de la papelería: que tiene un costo fijo de $20.000 y el carné con valor de $8.000.
e. Descuento del 20% sobre el costo de las materias.
Por medio del algoritmo imprimir el valor total de las materias que matriculó el estudiante con el
descuento del 20% más los costos fijos.*/

let $form = document.getElementById("container__validator__form");
let $nomEst = document.getElementById("nomEst");
let $asigMat = document.getElementById("asigMat");

let $btnValidator = document.getElementById("btn__validator");

let $btnClean = document.getElementById("btn__clean");


document.addEventListener("submit", (e) => {
  e.preventDefault();

  let nomEstvalue = $nomEst.value;
  let asigMatvalue = parseInt($asigMat.value);

  if (e.target === $form) {
    console.log(A)
  }
});

document.addEventListener("click", (e) => {
  if (e.target === $form.cerrar) {
    $valueAone.value = "";
    $valueBtwo.value = "";
  }
});