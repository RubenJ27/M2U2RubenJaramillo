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

let valueStationely = parseFloat(20.0) * 1000;
let valueLicense = parseFloat(8.0) * 1000;
let materialCost = parseFloat(150.0) * 1000;

function storeNomest() /*Con esta funcion mostramos el valor de cada materia ya preestablecido*/{
  let nomEstvalue = $nomEst.value;
  if (nomEstvalue.length > 3) {
    alert(`El valor de cada asignatura es de $150.000`);
  } else {
    alert(`El campo no puede estar vacio porfavor introduzca un nombre`);
  }
}
document.addEventListener("submit", (e) => {
  e.preventDefault();
  let asigMatvalue = parseInt($asigMat.value);
  let nomEstvalue = $nomEst.value;

  if (e.target === $form) {
    if (!isNaN(asigMatvalue)) {
      console.log(nomEstvalue);
      alert(
        `Valor de la papelería: que tiene un costo fijo de $20.000 y el carné con valor de $8.000.`
      );
      alert(
        `Se aplicara un descuento del 20% sobre el costo de las materias, adicionalmente se le suma el valor de los costos fijos estos no tienen descuento.`
      );
      let resMatsindes = parseFloat((materialCost * asigMatvalue) / 100) * 100;
      let resMatdes = resMatsindes - Math.floor(resMatsindes * 20) / 100;
      let resMat = resMatdes + valueStationely + valueLicense;
      alert(
        `El total de las materias que matriculo el estudiante ${nomEstvalue} es de ${asigMatvalue} materias y el valor total de la matricula con el descuento del 20% es ${resMat} recuerde que este valor tambien se le agregan los costos fijos que no estan sujetos al descuento`
      );
    } else {
      alert(
        `Porfavor introduzca un valor numerico no se permiten campos vacios`
      );
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target === $form.cerrar) {
    $nomEst.value = "";
    $asigMat.value = "";
  }
});
