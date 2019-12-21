function fooBarQuix(num){
    let myString = ''
    let numString = num.toString();
    if (num % 3 === 0){
        myString = myString + "Foo";
    }
    if (num % 5 === 0){
        myString = myString + "Bar";
    }
    if (num % 7 === 0){
        myString = myString + "Quix";
    }
    for (let index = 0; index < numString.length; index++) {
        if(numString[index] === '3'){
            myString = myString + "Foo";
        }
        if(numString[index] === '5'){
            myString = myString + "Bar";
        }
        if(numString[index] === '7'){
            myString = myString + "Quix";
        }
    }
    if (myString != ''){ //Si se ha escrito algo devolvemos la string creada.
        return myString;
    }
    return num; // Si no pues directamente devolvemos el numero.
}
let number = process.argv.splice(2); //Argumentos directamente.
if (number < 1 || number > 100){
    console.log("El numero introducido no es correcto.");
    return 0;
}
console.log(`El numero elegido es el: ${number}`);
for (i=0; i <= number; i++){
console.log(fooBarQuix(i));
}