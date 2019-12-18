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
function ArabToRoman(arabNumber){
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

function romanToArab(romanNumber){
    //Voy a crear dos arrays para tener en todo momento los valores arabes de los numeros romanos.
    let romans = ['M', 'D', 'C', 'L', 'X', 'V', 'I', 'E'];
    let arabs = [1000, 500, 100, 50, 10, 5, 1, 0]; //Esa E y ese 0 es un fix para que si ponemos solo XXX o III o estos están al final los sume.
    romanNumber += 'E'; //Aqui la añado
    let temPlus = 0; //El valor que se sumará o restará.
    let arabNumber = 0; //El numero arabe que retornaremos al usuario.
    let lastRoman = ''; //El ultimo valor romano que tenemos
    for (let i = 0; i <= romanNumber.length; i++){
        if (romanNumber[i] != lastRoman){ //La comprobacion de si el anterior es mayor o menor.
            if (arabs[romans.indexOf(romanNumber[i])] < arabs[romans.indexOf(lastRoman)]){
                arabNumber += temPlus;
            }
            else{
                arabNumber -= temPlus;
            }
            temPlus = 0;
        }
        if (romanNumber[i] === 'M'){
            arabNumber += arabs[romans.indexOf(romanNumber[i])];
        }
        if (romanNumber[i] === 'D'){
            arabNumber += arabs[romans.indexOf(romanNumber[i])];
        }
        if (romanNumber[i] === 'C'){
            temPlus += arabs[romans.indexOf(romanNumber[i])]
        }
        if (romanNumber[i] === 'L'){
            arabNumber += arabs[romans.indexOf(romanNumber[i])]
        }
        if (romanNumber[i] === 'X'){
            temPlus += arabs[romans.indexOf(romanNumber[i])]
        }
        if (romanNumber[i] === 'V'){
            arabNumber += arabs[romans.indexOf(romanNumber[i])]
        }
        if (romanNumber[i] === 'I'){
            temPlus += arabs[romans.indexOf(romanNumber[i])]
        }
        lastRoman = romanNumber[i];
    }
    return arabNumber;
}
function validator(romanNumber){
    let countM = 0, countD = 0, countC = 0, countL = 0, countX = 0, countV = 0, countI = 0;
    let romans = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let checkJ =  false;
    for(let i = 0; i < romanNumber.length; i++){ //Comprobamos que no haya ninguna letra extraña.
        switch(romanNumber[i]) {
            case 'I':
                continue;
                break;
            case 'V':
                continue;
                break;
            case 'X':
                continue;
                break;
            case 'L':
                continue;
                break;
            case 'C':
                continue;
                break;
            case 'D':
                continue;
                break;
            case 'M':
                continue;
                break;
            default:
                return false;
        }
    }
    for(i = 0; i < romanNumber.length; i++){///Controlamos ahora las repeticiones de numeros.
        //Voy a poner primero todos los contadores numericos.
        if (romanNumber[i] === 'M'){
            countM++;
        }
        if (romanNumber[i] === 'D'){
            countD++;
            if (countC > 1){ //No puede haber mas de un restador.
                return false;
            }
            countC = 0; //Si hubiera habido C antes de la D lo pongo a cero.
        }
        if (romanNumber[i] === 'C'){
            countC++;
        }
        if (romanNumber[i] === 'L'){
            countL++;
            if (countX > 1){ //No puede haber mas de un restador.
                return false;
            }
            CountX = 0; //Si hubiera X restadoras las reseteo;
        }
        if (romanNumber[i] === 'X'){
            countX++;
        }
        if (romanNumber[i] === 'V'){
            countV++;
            if (countI > 1){ //No puede haber mas de un restador.
                return false;
            }
            countI = 0; //Ponemos a 0 los unos restadores.
        }
        if (romanNumber[i] === 'I'){
            countI++;
        }
        //A partir de aqui y en cada iteracion vamos a comprobar si los contadores se pasan de 3 o de 1 dependiendo de cada numero.
        if (countM > 3 || countC > 3 || countX > 3 || countI > 3){
            return false;
        }
        if (countD > 1 || countL > 1 || countV > 1){
            return false;
        }
    }
    for (i = 0; i < romanNumber.length; i++){
        checkJ = false; //Por cada iteracion hay que poner a false el check, si no no sirve de nada.
        if (romanNumber[i] === 'I'){ //Comprobamos las condiciones para I
            if (romanNumber[i+1] === undefined){ //Si ya no quedan numeros
                continue;
            }
            if (romanNumber[i+1] === romans[romans.indexOf(romanNumber[i])]){
                continue;
            }
            if (romanNumber[i+1] === romans[romans.indexOf(romanNumber[i])-1]){
                continue;
            }
            if (romanNumber[i+1] === romans[romans.indexOf(romanNumber[i])-2]){
                continue;
            }
            else{
                return false;
            }
        }
        if (romanNumber[i] === 'X'){ //Condiciones para X
            if (romanNumber[i+1] === undefined){ //Si ya no quedan numeros
                continue;
            }
            for(let j = romans.indexOf(romanNumber[i]); j < romans.length; j++){ //Con este bucle comprobamos que cualquier numero que sea menor puede estar tras la X
                if (romanNumber[i+1] === romans[j]){
                    checkJ = true;
                    break;
                }
            }
            if (romanNumber[i+1] === 'L'){
                continue;
            }
            if (romanNumber[i+1] === 'C'){
                continue;
            }
            if (checkJ){ //Aqui tenemos lo que hemos realizado con el bucle.
                continue;
            }
            else{
                return false;
            }
        }
        if (romanNumber[i] === 'C'){ //Condiciones para C
            if (romanNumber[i+1] === undefined){ //Si ya no quedan numeros
                continue;
            }
            for(let j = romans.indexOf(romanNumber[i]); j < romans.length; j++){ //Con este bucle comprobamos que cualquier numero que sea menor puede estar tras la X
                if (romanNumber[i+1] === romans[j]){
                    checkJ = true;
                    break;
                }
            }
            if (romanNumber[i+1] === 'D'){
                continue;
            }
            if (romanNumber[i+1] === 'M'){
                continue;
            }
            if (checkJ){ //Aqui tenemos lo que hemos realizado con el bucle.
                continue;
            }
            else{
                return false;
            }
        }
        //Con esto tenemos validados los numeros con mas condiciones, de aquí hacía delante nos queda M V L D que a su derecha solo pueden tener numeros mas pequeños, así que nos quedamos solo con la parte del bucle J
        if (romanNumber[i] === 'V'){
            if (romanNumber[i+1] === undefined){ //Si ya no quedan numeros
                continue;
            }
            for(let j = romans.indexOf(romanNumber[i]); j < romans.length; j++){ //Con este bucle comprobamos que cualquier numero que sea menor puede estar tras la X
                if (romanNumber[i+1] === romans[j]){
                    checkJ = true;
                    break;
                }
            }
            if (checkJ){ //Aqui tenemos lo que hemos realizado con el bucle.
                continue;
            }
            else{
                return false;
            }
        }
        if (romanNumber[i] === 'L'){
            if (romanNumber[i+1] === undefined){ //Si ya no quedan numeros
                continue;
            }
            for(let j = romans.indexOf(romanNumber[i]); j < romans.length; j++){ //Con este bucle comprobamos que cualquier numero que sea menor puede estar tras la X
                if (romanNumber[i+1] === romans[j]){
                    checkJ = true;
                    break;
                }
            }
            if (checkJ){ //Aqui tenemos lo que hemos realizado con el bucle.
                continue;
            }
            else{
                return false;
            }
        }
        if (romanNumber[i] === 'D'){
            if (romanNumber[i+1] === undefined){ //Si ya no quedan numeros
                continue;
            }
            for(let j = romans.indexOf(romanNumber[i]); j < romans.length; j++){ //Con este bucle comprobamos que cualquier numero que sea menor puede estar tras la X
                if (romanNumber[i+1] === romans[j]){
                    checkJ = true;
                    break;
                }
            }
            if (checkJ){ //Aqui tenemos lo que hemos realizado con el bucle.
                continue;
            }
            else{
                return false;
            }
        }
        if (romanNumber[i] === 'M'){
            if (romanNumber[i+1] === undefined){ //Si ya no quedan numeros
                continue;
            }
            for(let j = romans.indexOf(romanNumber[i]); j < romans.length; j++){ //Con este bucle comprobamos que cualquier numero que sea menor puede estar tras la X
                if (romanNumber[i+1] === romans[j]){
                    checkJ = true;
                    break;
                }
            }
            if (checkJ){ //Aqui tenemos lo que hemos realizado con el bucle.
                continue;
            }
            else{
                return false;
            }
        }
    }
    return true;
}
console.log(validator('MVI'));