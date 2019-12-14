/*## FooBarQuix

Nos dan un número entre el 1 y 100, y tenemos que devolver por orden lo siguiente:

* Si el número es divisible por 3, escribiremos “Foo” en lugar del número
* Si el número es divisible por 5, añadimos “Bar”
* Si el número es divisible por 7, añadimos “Quix”.
* Por cada dígito 3,5 o 7, añadiremos “Foo”, “Bar”, “Quix” respectivamente y en orden de aparición.*/

let number = Math.floor((Math.random() * 100) + 1); //Obtengo numero aleatorio 1 al 100.
function fooBarQuix(num){
    let myString = ''
    let controlWritte = false;
    if (num % 3 === 0){
        myString = myString + "Foo";
        controlWritte = true;
    }
    if (num % 5 === 0){
        myString = myString + "Bar";
        controlWritte = true;
    }
    if (num % 7 === 0){
        myString = myString + "Quix";
        controlWritte = true;
    }
    if (controlWritte){
        return myString;
    }
    else{
        return num;
    }
}

console.log(`El numero elegido es el: ${number}`);
console.log(fooBarQuix(number));