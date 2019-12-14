/*# Segunda Kata
## Sistema Romano
Vamos a hacer un ejercicio clásico y es jugar con los números romanos y árabes.

Como refresco, vamos a ver sus símboles y reglas.

#### Símbolos

 Romano | Árabe 
--------|-------
 I | 1 
 V | 5 
 X | 10 
 L | 50 
 C | 100 
 D | 500 
 M | 1000 

### Reglas

Sólo se contemplan números entre el 1 y el 3999

* Los símbolos I, X, C y M se pueden repetir hasta tres veces.
* Los símbolos V, L y D no pueden repetirse.
* Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
* Los símbolos I, X y C se restan si están a la izquierda de otro mayor y solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
* I se resta de V y X
* X se resta de L y C
* C se resta de D y M
* Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.

### Ejercicios

* Crear una función para pasar de número romanos a árabes
* Crear una función para pasar de árabes a romanos
* Hacer un validador de números romanos*/

function fromArabToRoman(number){
    let countI = 0; // 1 / R:3
    let countV = 0; // 5 / R: NO
    let countX = 0; // 10 / R: 3
    let countL = 0; // 50 / R: NO
    let countC = 0; // 100 /: 3
    let countD = 0; // 500 / R: NO
    let countM = 0; // 1000 / R: 3
    let romanString = '';
    while (number != 0){
        if (number >= 1000 && countM < 3){
            countM++;
            number -= 1000;
            romanString += 'M';
            continue;
        }
        if (number >= 500 && countD < 1){
            countD++;
            number -= 500;
            romanString += 'D';
            continue;
        }
        if (number >= 100 && countC < 3){
            countC++;
            number -= 100;
            romanString += 'C';
            continue;
        }
        if (number >= 50 && countL < 1){
            countL++;
            number -= 50;
            romanString += 'L';
            continue;
        }
        if (number >= 10 && countX < 3){
            countX++;
            number -= 10;
            romanString += 'X';
            continue;
        }
        if (number >= 5 && countV < 1){
            countV++;
            number -= 5;
            romanString += 'V';
            continue;
        }
        if (number >= 1 && countI < 3){
            countI++;
            number -= 1;
            romanString += 'I';
            continue;
        }
        if (countI === 3){ //Esto me va a decir si hay que poner un 4
            romanString = romanString.slice(0,-3);
            console.log(romanString);
            number += 3;
            romanString += 'IV';
            number -= 4;
            continue;
        }
    }
    return romanString;
}
const arg = process.argv.splice(2); //Pillamos por argumentos.
console.log(fromArabToRoman(parseInt(arg[0])));