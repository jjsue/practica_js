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
function pokerGame(){
    const deck = [{palo: 'S', value: 2}, {palo: 'S', value: 3}, {palo: 'S', value: 4}, {palo: 'S', value: 5}, {palo: 'S', value: 6}, {palo: 'S', value: 7}, {palo: 'S', value: 8}, {palo: 'S', value: 9}, {palo: 'S', value: 'T'}, {palo: 'S', value: 'J'}, {palo: 'S', value: 'Q'}, {palo: 'S', value: 'K'}, {palo: 'S', value: 'A'},
                {palo: 'H', value: 2}, {palo: 'H', value: 3}, {palo: 'H', value: 4}, {palo: 'H', value: 5}, {palo: 'H', value: 6}, {palo: 'H', value: 7}, {palo: 'H', value: 8}, {palo: 'H', value: 9}, {palo: 'H', value: 'T'}, {palo: 'H', value: 'J'}, {palo: 'H', value: 'Q'}, {palo: 'H', value: 'K'}, {palo: 'H', value: 'A'},
                {palo: 'C', value: 2}, {palo: 'C', value: 3}, {palo: 'C', value: 4}, {palo: 'C', value: 5}, {palo: 'C', value: 6}, {palo: 'C', value: 7}, {palo: 'C', value: 8}, {palo: 'C', value: 9}, {palo: 'C', value: 'T'}, {palo: 'C', value: 'J'}, {palo: 'C', value: 'Q'}, {palo: 'C', value: 'K'}, {palo: 'C', value: 'A'},
                {palo: 'D', value: 2}, {palo: 'D', value: 3}, {palo: 'D', value: 4}, {palo: 'D', value: 5}, {palo: 'D', value: 6}, {palo: 'D', value: 7}, {palo: 'D', value: 8}, {palo: 'D', value: 9}, {palo: 'D', value: 'T'}, {palo: 'D', value: 'J'}, {palo: 'D', value: 'Q'}, {palo: 'D', value: 'K'}, {palo: 'D', value: 'A'}];
    return deck;
}
console.log(pokerGame());