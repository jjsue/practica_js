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
    //Lo iba a hacer con diccionarios pero creo que va a ser mejor con array.
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
    }
    romanString = millares + centenas + decenas + unidades;
    return romanString;
}

console.log(fromArabToRoman(9));