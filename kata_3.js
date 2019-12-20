/*
    picas/spades (S)
    corazones/hearts (H)
    tréboles/clubs (C)
    diamantes/diamonds (D).

Valor:

    2
    3
    4
    5
    6
    7
    8
    9
    10 /Ten (T)
    dama/Jack (J)
    reina/Queen (Q)
    rey/King (K)
    as/Ace (A).
*/
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function pokerConversor(playerToConvert){
    for (let i = 0; i < playerToConvert.length; i++){
        if(playerToConvert[i].value === 'T'){
            playerToConvert[i].value = 10;
        }
        if(playerToConvert[i].value === 'J'){
            playerToConvert[i].value = 11;
        }
        if(playerToConvert[i].value === 'Q'){
            playerToConvert[i].value = 12;
        }
        if(playerToConvert[i].value === 'K'){
            playerToConvert[i].value = 13;
        }
        if(playerToConvert[i].value === 'A'){
            playerToConvert[i].value = 14;
        }
    }
    let playerOrdered = [], minorValue = 15, position, actualValue = 0;
    //Ademas de conversor lo vamos a usar para ordenar las cartas por su valor del 2 al 14.
    for (i = 0; i < playerToConvert.length; i = 0){
        for (let j = 0; j < playerToConvert.length; j++){
            /*if (playerToConvert[j] === undefined){
                continue;
            }*/
            if (minorValue > playerToConvert[j].value){
                minorValue = playerToConvert[j].value;
                position = j;
            }
        }
        playerOrdered[actualValue] = playerToConvert[position];
        playerToConvert.splice(position, 1);
        minorValue = 15;
        actualValue++;
    }
    return playerOrdered;
}

function pokerRules(player){
    //Convertimos a valores numericos todos los valores para que sea mas sencillo de analizar.
    player = pokerConversor(player);
    //Empezamos por la regla mas alta. Escalera de color.
    if ((player[0].palo === player[1].palo && player[0].palo === player[2].palo && player[0].palo === player[3].palo && player[0].palo === player[4].palo) && (player[0].value + 1 === player[1].value && player[1].value + 1 === player[2].value && player[2].value + 1 === player[3].value && player[3].value + 1 === player[4].value)){
        console.log("Tiene escalera de color");
    }
    // Vamos con el four of a kind o poker.
    if ((player[0].value === player[1].value && player[0].value === player[2].value && player[0].value === player[3].value) || (player[1].value === player[2].value && player[1].value === player[3].value && player[1].value === player[4].value)){
        console.log("Tiene poker");
    }
}

function pokerGame(){
    let playerOne = [], playerTwo = [];
    const deck = [{palo: 'S', value: 2}, {palo: 'S', value: 3}, {palo: 'S', value: 4}, {palo: 'S', value: 5}, {palo: 'S', value: 6}, {palo: 'S', value: 7}, {palo: 'S', value: 8}, {palo: 'S', value: 9}, {palo: 'S', value: 'T'}, {palo: 'S', value: 'J'}, {palo: 'S', value: 'Q'}, {palo: 'S', value: 'K'}, {palo: 'S', value: 'A'},
                {palo: 'H', value: 2}, {palo: 'H', value: 3}, {palo: 'H', value: 4}, {palo: 'H', value: 5}, {palo: 'H', value: 6}, {palo: 'H', value: 7}, {palo: 'H', value: 8}, {palo: 'H', value: 9}, {palo: 'H', value: 'T'}, {palo: 'H', value: 'J'}, {palo: 'H', value: 'Q'}, {palo: 'H', value: 'K'}, {palo: 'H', value: 'A'},
                {palo: 'C', value: 2}, {palo: 'C', value: 3}, {palo: 'C', value: 4}, {palo: 'C', value: 5}, {palo: 'C', value: 6}, {palo: 'C', value: 7}, {palo: 'C', value: 8}, {palo: 'C', value: 9}, {palo: 'C', value: 'T'}, {palo: 'C', value: 'J'}, {palo: 'C', value: 'Q'}, {palo: 'C', value: 'K'}, {palo: 'C', value: 'A'},
                {palo: 'D', value: 2}, {palo: 'D', value: 3}, {palo: 'D', value: 4}, {palo: 'D', value: 5}, {palo: 'D', value: 6}, {palo: 'D', value: 7}, {palo: 'D', value: 8}, {palo: 'D', value: 9}, {palo: 'D', value: 'T'}, {palo: 'D', value: 'J'}, {palo: 'D', value: 'Q'}, {palo: 'D', value: 'K'}, {palo: 'D', value: 'A'}];
    const mixed = shuffle(deck); //Se baraja.
    //Ahora vamos a dar las manos.
    /*for (let i = 0; i < 10; i++){
        if (i % 2 === 1){
            playerOne.push(mixed[i]);
        }
        if (i % 2 === 0){
            playerTwo.push(mixed[i]);
        }
    }*/
    playerOne = [{palo: 'S', value: 'T'}, {palo: 'H', value: 'T'}, {palo: 'S', value: 'A'}, {palo: 'C', value: 'T'}, {palo: 'D', value: 'T'}];
    //Con las manos ya barajadas toca ver quien gana. Vamos a crear una función a parte para ordenarlo un poco.
    pokerRules(playerOne);
}
pokerGame();