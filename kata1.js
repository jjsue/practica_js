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
let number = Math.floor((Math.random() * 100) + 1);
console.log(`El numero elegido es el: ${number}`);
console.log(fooBarQuix(number));