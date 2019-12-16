/*Reglas

Sólo se contemplan números entre el 1 y el 3999

    Los símbolos I, X, C y M se pueden repetir hasta tres veces.
    Los símbolos V, L y D no pueden repetirse.
    Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
    Los símbolos I, X y C se restan si están a la izquierda de otro mayor y solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
    I se resta de V y X
    X se resta de L y C
    C se resta de D y M
    Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.
Simbolos:
I : 1
V : 5
X : 10
L : 50
C : 100
D : 500
M : 1000*/

function reverse(string) { //Funcion que me da la vuelta a una cadena.
    let x = string.length;
    let reverseString = '';
   
    while (x>=0) {
      reverseString = reverseString + string.charAt(x);
      x--;
    }
    return reverseString;
}
function fromArabToRoman(arabNumber){
    const arabString = reverse(arabNumber.toString());
    let unidades = '';
    let decenas = '';
    let centenas = '';
    let millares = '';
    let romanString = '';
    for (let i = 0; i < arabString.length; i++) {
        if (i === 0){ // Aquí estamos en las unidades.
            switch(arabString[i]) {
                case '1':
                    unidades = 'I';
                    break;
                case '2':
                    unidades = 'II';
                    break;
                case '3':
                    unidades = 'III';
                    break;
                case '4':
                    unidades = 'IV';
                    break;
                case '5':
                    unidades = 'V';
                    break;
                case '6':
                    unidades = 'VI';
                    break;
                case '7':
                    unidades = 'VII'
                    break;
                case '8':
                    unidades = 'VIII';
                    break;
                case '9':
                    unidades = 'IX';
                    break;
                default:
                    break;
            }
        }
        if (i === 1){ //Aqui estamos en las decenas.
            switch(arabString[i]) {
                case '1':
                    decenas = 'X';
                    break;
                case '2':
                    decenas = 'XX';
                    break;
                case '3':
                    decenas = 'XXX';
                    break;
                case '4':
                    decenas = 'XL';
                    break;
                case '5':
                    decenas = 'L';
                    break;
                case '6':
                    decenas = 'LX';
                    break;
                case '7':
                    decenas = 'LXX'
                    break;
                case '8':
                    decenas = 'LXXX';
                    break;
                case '9':
                    decenas = 'XC';
                    break;
                default:
                    break;
            }
        }
        if (i === 2){ //Controlamos las centenas.
            switch(arabString[i]) {
                case '1':
                    centenas = 'C';
                    break;
                case '2':
                    centenas = 'CC';
                    break;
                case '3':
                    centenas = 'CCC';
                    break;
                case '4':
                    centenas = 'CD';
                    break;
                case '5':
                    centenas = 'D';
                    break;
                case '6':
                    centenas = 'DC';
                    break;
                case '7':
                    centenas = 'DCC'
                    break;
                case '8':
                    centenas = 'DCCC';
                    break;
                case '9':
                    centenas = 'CM';
                    break;
                default:
                    break;
            }
        }
        if (i === 3){ //Millares
            switch (arabString[i]){
                case '1':
                    millares = 'M';
                    break;
                case '2':
                    millares = 'MM';
                    break;
                case '3':
                    millares = 'MMM';
                    break;
                default:
                    break;
            }
        }
    }
    romanString = millares + centenas + decenas + unidades;
    return romanString;
}