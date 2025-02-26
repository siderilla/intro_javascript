
const array1 = [23, 14, 56, 3, 0, -1, 55, -12, 60, 8];

///////////////////////  1  ////////////////////////
// filtrare tutti i numeri minori o uguali a zero (FILTER)

function filter(array, filteringFunction) {
    const parkingArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (filteringFunction(element, i, array)) {
            parkingArray.push(element);
        }
    }
    return parkingArray;
}

function isMinorEqualZero(nbr) {
    if (nbr <= 0) {
        return true;
    } else {
        return false;
    }
}

const minOrEqualZero = filter(array1, isMinorEqualZero); // chiamo filter() devo specificare com'è la funzione
// se voglio che chiami la funzione nella libreria allora la notazione è .filter

// const minOrEqualZero = array1.filter(nbr => nbr <= 0);
console.log ('filter numbers less or equal to zero', minOrEqualZero);

///////////////////////  2  ////////////////////////
// convertire celsius in farhenheit (MAP)

// function convertionCelsius(num) {
//     const newFarh = (num * 9/5) + 32;
//     return newFarh ;
// }

const convertCelsiusToFar = array1.map(num => (num * 9/5) + 32);
console.log ('map celsius to far', convertCelsiusToFar);

///////////////////////  3  ////////////////////////
// fare la media dei valori (REDUCE)

function reduce(array, reducingFunction, startingAccumulator) {
    let accumulator = startingAccumulator;
    for (let i = 0; i < array.length; i++) {
        const current = array[i]; // elemento corrente su array
        accumulator = reducingFunction(accumulator, current, i, array);
    }
    return accumulator;
}

function avarageArray(accumulator, current, array) {
    const newAccumulator = accumulator + current;
    const avarageAll = newAccumulator / array.length;
    return avarageAll;
}

const avarageAv = reduce(array1, avarageArray);


// const avarageArray = array1.reduce((a, c) => (a + c), 0) / array1.length;
console.log('media', avarageAv);


///////////////////////  4  ////////////////////////
// restituire valore più basso e il più alto (REDUCE)

const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie']

///////////////////////  5  ////////////////////////
// filtrare tutti i nomi più grandi di 4 char (FILTER)

///////////////////////  6  ////////////////////////
// trasformare tutte le stringhe in maiuscolo (MAP)

///////////////////////  7  ////////////////////////
// mettere SOLO le iniziali maiuscole (MAP)

///////////////////////  8  ////////////////////////
// restituire una stringa composta dall'iniziale delle parole (REDUCE)

///////////////////////  9  ////////////////////////
// sommare tutti i char di tutte le stringhe (unico return) (REDUCE)

///////////////////////  10  ////////////////////////
// eliminare le vocali dalle stringhe (MAP)

///////////////////////  11  ////////////////////////
// restituire un array di numeri che sono le lunghezze delle singole parole (MAP)

const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0]];

///////////////////////  12  ////////////////////////
// restituire un array di numeri che sono le lunghezze dei singoli array (MAP)

///////////////////////  13  ////////////////////////
// sommare tutti i numeri in tutti gli array (REDUCE)

///////////////////////  14  ////////////////////////
// sommare tutte le lunghezze degli array (REDUCE)

///////////////////////  15  ////////////////////////
// sommare tutti i numeri con indice uguale e restituire un array di risultati (REDUCE)

