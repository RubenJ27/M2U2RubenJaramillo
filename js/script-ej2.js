/* Desarrolle un algoritmo que permita:
f. Leer cuatro valores numéricos y almacenarlos en las variables A, B, C y D
respectivamente.
g. El algoritmo debe imprimir cual es el mayor valor y cual es el menor valor. Recuerde
verificar que los cuatro valores introducidos por el teclado sean valores distintos.
h. Crear un mensaje de alerta en caso que se detecte la introducción de valores iguales.*/

let $form = document.getElementById("container__validator__form");
let $valueAone = document.getElementById("numOne");
let $valueBtwo = document.getElementById("numTwo");
let $valueCthree = document.getElementById("numThree");
let $valueDfour = document.getElementById("numFour");

let $btnValidator = document.getElementById("btn__validator");

let $btnClean = document.getElementById("btn__clean");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let A = parseInt($valueAone.value);
      let B = parseInt($valueBtwo.value);
      let C = parseInt($valueCthree.value);
      let D = parseInt($valueDfour.value);
  

  if (e.target === $form) {
    if (
      A === B ||
      A === C ||
      A === D ||
      B === C ||
      B === D ||
      C ===
        D /*Este if se encarga de validar la igualdad de todos los campos y es if principal que anida las validaciones*/
    ) {
      if (
        (A === B &&
          A === C &&
          A ===
            D) /*Esta linea se encarga de validar que todos los valores no sean iguales */ ||
        A === "" ||
        B === "" ||
        C === "" ||
        D ===
          "" /*<=Esta linea se encarga de validar que ningun campo este vacio*/
      ) {
        if ((A === "" || B === "" || C === "" || D === "")) {
          /*Este if se encarga de validar que ningun campo este vacio*/
          alert(
            `Porfavor valide que ninguno de los campos este vacio para obtener el resultado correctamente`
          );
        } else {
          /*Este else se encarga de validar que todos sean iguales*/
          alert(
            `El primer valor ${A}, segundo valor ${B}, tercer ${C} y cuarto valor ${D} son iguales porfavor introduzca numeros distintos para continuar la operacion`
          );
        }
      } else {
        /*Este else es para validar ningun valor sea igual al otro, entre parejas y trios de variables*/

        if (
          (A === B && A === C) ||
          (B === C && B === D) ||
          (A === B && A === D) ||
          (A === C &&
            A ===
              D) /*Esta linea se encarga de validar que los trios de variables no sean iguales */
        ) {
          alert(
            `Hay tres valores iguales porfavor reemplacelos por valores diferentes para realizar la operacion correctamente`
          );
        } else {
          /*Esta es la validacion de la variable A con las variables B,C,D*/
          if (A === B) {
            alert(
              `El primer valor ${A} es igual al segundo valor ${B} porfavor introduzca numeros distintos para continuar la operacion`
            );
          }
          if (A === C) {
            alert(
              `El primer valor ${A} es igual al tercer valor ${C} porfavor introduzca numeros distintos para continuar la operacion`
            );
          }
          if (A === D) {
            alert(
              `El primer valor ${A} es igual al cuarto valor ${D} porfavor introduzca numeros distintos para continuar la operacion`
            );
          }

          /*Esta es la validacion de la variable B con las variables C,D*/
          if (B === C) {
            alert(
              `El segundo valor ${B} es igual al tercero valor ${C} porfavor introduzca numeros distintos para continuar la operacion`
            );
          }
          if (B === D) {
            alert(
              `El segundo valor ${B} es igual al cuarto valor ${D} porfavor introduzca numeros distintos para continuar la operacion`
            );
          }

          /*Esta es la validacion de la variable C con las variables D*/
          if (C === D) {
            alert(
              `El tercero valor ${C} es igual al cuarto valor ${D} porfavor introduzca numeros distintos para continuar la operacion`
            );
          }
        }
      }
    } else /*Este es el else principal */{
      /*En esta seccion estan los if anidados que validan cual es el valor mayor y menor */
      let numMayor;
      if ((isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D))) {
        /*Este if se encarga de validar que ningun campo este vacio*/
        alert(
          `Porfavor valide que ninguno de los campos este vacio para obtener el resultado correctamente`
        );
      }else if (A > B && A > C && A > D) /*Estos if anidados comprueban si el valor de A es mayor */ {
        let numMayor = A;
        alert(`El numero mayor es ${numMayor}`);

        if (A < B && A < C && A < D) /*Estos if anidados comprueban si el valor de A es menor */ {
          let numMayor = A;
          alert(`El numero menor es ${numMayor}`);
        } else {
          if (B < A && B < C && B < D) /*Estos if anidados comprueban si el valor de B es menor */{
            let numMayor = B;
          alert(`El numero menor es ${numMayor}`);
          }else {
            if (C < A && C < B && C < D) /*Estos if anidados comprueban si el valor de C es menor */{
              let numMayor = C;
            alert(`El numero menor es ${numMayor}`);
            }else if(D < A && D < B && D < C){
              let numMayor = D;
              alert(`El numero menor es ${numMayor}`);
            }
        }
      }

      } else if(B > A && B > C && B > D) /*Estos if anidados comprueban si el valor de B es mayor */{
        let numMayor = B;
        alert(`El numero mayor es ${numMayor}`);
        if (A < B && A < C && A < D) /*Estos if anidados comprueban si el valor de A es menor */{
          let numMayor = A;
        alert(`El numero menor es ${numMayor}`);
        }else {
          if (C < A && C < B && C < D) /*Estos if anidados comprueban si el valor de C es menor */{
            let numMayor = C;
          alert(`El numero menor es ${numMayor}`);
          }else if(D < A && D < B && D < C){
            let numMayor = D;
            alert(`El numero menor es ${numMayor}`);
          }   
      }
    }else if(C > A && C > B && C > D) /*Estos if anidados comprueban si el valor de C es mayor */{
      let numMayor = C;
      alert(`El numero mayor es ${numMayor}`);
      if (A < B && A < C && A < D) /*Estos if anidados comprueban si el valor de A es menor */{
        let numMayor = A;
      alert(`El numero menor es ${numMayor}`);
      }else {
        if (B < A && B < C && B < D) /*Estos if anidados comprueban si el valor de C es menor */{
          let numMayor = B;
        alert(`El numero menor es ${numMayor}`);
        }else if(D < A && D < B && D < C){
          let numMayor = D;
          alert(`El numero menor es ${numMayor}`);
        }   
    }
  }else /*Estos if anidados comprueban si el valor de D es mayor */{
        let numMayor = D;
        alert(`El numero mayor es ${numMayor}`);
        if (A < B && A < C && A < D) /*Estos if anidados comprueban si el valor de A es menor */ {
          let numMayor = A;
          alert(`El numero menor es ${numMayor}`);
        } else {
          if (B < A && B < C && B < D) /*Estos if anidados comprueban si el valor de B es menor */{
            let numMayor = B;
          alert(`El numero menor es ${numMayor}`);
          }else {
            if (C < A && C < B && C < D) /*Estos if anidados comprueban si el valor de C es menor */{
              let numMayor = C;
            alert(`El numero menor es ${numMayor}`);
            }else if(D < A && D < B && D < C){
              let numMayor = D;
              alert(`El numero menor es ${numMayor}`);
            }
        }
      }
  }

    }
  }
      
});

document.addEventListener("click", (e) => {
  if (e.target === $form.cerrar) {
    $valueAone.value = "";
    $valueBtwo.value = "";
    $valueCthree.value = "";
    $valueDfour.value = "";
  }
});
