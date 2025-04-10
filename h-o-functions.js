// HIGH ORDER functions - più utilizzate
// funzioni che accettano come parametro altre funzioni
// MAPPING:
const testArray = [2, 5, 7, 1, 0, 100, 103];
function add2ToArray(arrayOfNumbers) {
    const parkingArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        let elementPlus2 = element + 2;
        parkingArray.push(elementPlus2);
    }
    return parkingArray;
}
// console.log(add2ToArray(testArray));
console.log(add2ToArray(testArray.map(add2)));


function addIndexToArray(arrayOfNumbers) {
    const parkingArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        let elementPlusIndex = element + i;
        parkingArray.push(elementPlusIndex);
    }
    return parkingArray;
}
console.log(addIndexToArray(testArray));

function map(array, mappingFunction) {
    const parkingArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = mappingFunction(element, i, array);

        parkingArray.push(newElement);
    }
    return parkingArray;
}

function add2(num) {
    const newNum = num + 2;
    return newNum;
}

const newArray3 = map(testArray, add2);
console.log('function new add 2', newArray3);

function addIndex(num, index) {
    const newNum = num + index;
    return newNum;
}

const newArray4 = map(testArray, addIndex);
console.log('function new add index', newArray4);

const testArray2 = ["ciao", "miao", "bau", "superyeah"];
function toUpper(str) {
    const newString = str.toUpperCase()
    return newString;
}

const newArray5 = map(testArray2, toUpper);
console.log('toupper', newArray5);

const newArray6 = testArray.map(num => num + 5);
console.log("speedy efficient syntax", newArray6);

// funzione che a ogni numero di testArray sottrae il doppio del suo indice

const newArray8 = testArray.map((nbr, i) => nbr - (2 * i));
console.log('substract', newArray8);

// funzione che restituisce un array con le lunghezze delle stringhe di testArray2

const newArray9 = testArray2.map(str => str.length);
console.log('string length', newArray9);

// funzione che appende a tutte le stringhe di testArray2 la parola banana

const newArray10 = testArray2.map(str => str + 'banana');
console.log('string + banana', newArray10);

// FILTER ESEMPIO:

function keepEven(testArray) {
    const evenArray = [];
    for (let i = 0; i < testArray.length; i++) {
        const num = testArray[i];
        if (num % 2 === 0) {
            evenArray.push(num);
        }
    }
    return evenArray;
}

const newArray11 = keepEven(testArray);
console.log("keep even function", newArray11);


// FILTER FUNCTION GENERICA:

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

function isEven(nbr) {
    if (nbr % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const newArray12 = filter(testArray, isEven);
console.log ('keep even map', newArray12);

// funzione che tiene dentro testArray tutti i numeri minori di 5
const newArray13 = testArray.filter(nbr => nbr < 5);
console.log ('keep less than 5', newArray13);

// funzione che tiene dentro testArray2 tutte le parole più lunghe di 6 char

const newArray14 = testArray2.filter(str => str.length > 6);
console.log('char more than 6', newArray14);

// funzione che rimuove da testArray2 tutte le stringhe con indice pari

// const newArray15 = testArray2.filter((str, i) => i % 2 !== 0);
// in questo caso il parametro str non ci serve, ma va dichiarato comunque
// in alternativa si può scrivere underscore al posto del parametro inutilizzato:
const newArray15 = testArray2.filter((_, i) => i % 2 !== 0);
console.log('only index is odd', newArray15);

// MOSTRO REDUCE

function sumAll(arrayOfNumbers) {
    let accumulator = 0; // starting point
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        accumulator += element;
    }
    return accumulator;
}

const newArray16 = sumAll(testArray);
console.log('sum all', newArray16);

function reduce(array, reducingFunction, startingAccumulator) {
    let accumulator = startingAccumulator;
    for (let i = 0; i < array.length; i++) {
        const current = array[i]; // elemento corrente su array
        accumulator = reducingFunction(accumulator, current, i, array);
    }
    return accumulator;
}

function sum(accumulator, current) {
    const newAccumulator = accumulator + current;
    return newAccumulator;
}

const sumNumbers = reduce(testArray, sum, 0);
console.log('reducing map sumAll', sumNumbers);

// ordine parametri: il primo è il ritorno

const sumString = testArray2.reduce((a, c) => a + c, "");
console.log ('sum all strings', sumString);

// FIND your motivation

function isEven(nbr) {
    // if (nbr % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (nbr % 2 === 0);
} 

console.log(testArray.filter(isEven));
console.log(testArray.find(isEven)); // find è come filter, ma si ferma al primo numero pari che trova nell'array

// SOME where over the rainbow

console.log(testArray.some(isEven)); // c'è almeno un pari? true / false

// EVERY body needs somebody

console.log(testArray.every(isEven)); // sono TUTTI pari? true / false

// SORT - mette in ordine in base ad ascii table, ma possiamo cambiarla

function sortingFunction(first, second) { //
    if (first < second) { // ordine decrescente
        return 1; // se invertiamo l'ordine con cui controlla first > o < di second = ordine crescente
    } else if (first > second) {
        return -1;
    } else {
        return 0;
    }
}

testArray.sort(sortingFunction);
console.log('sorting completa ordine decrescente:', testArray);

testArray.sort();
console.log('ordine base di sort:', testArray);
// così i numeri li mette in ordine come se li leggesse come stringhe, 
// accedendo all'indice e controllando ciascuna unità separatamente, senza vedere che nell'ordine di 
// grandezza 100 è più grande di 7, ma comunque lo mette al terzo posto perché inizia con 1, 
// parimenti a 1 e 103

// testArray.sort((f, s) => f - s); // ordine crescente
// console.log('arrow function ordine crescente:', testArray);
// testArray.sort((f, s) => s - f); // ordine decrescente
// console.log('arrow function ordine decrescente:', testArray);

// testArray2.sort((fString, sString) => fString.localeCompare(sString));
// console.log('dalla a alla z:', testArray2);

// testArray2.sort((fString, sString) => sString.localeCompare(fString));
// console.log('dalla z alla a:',testArray2);

// versione brutta:
function betterSort(array, sortingFunction) {
    const newArray = [...array];
    newArray.sort(sortingFunction);
    return newArray;
}

const sortedArray = betterSort(testArray2, (fString, sString) => fString.localeCompare(sString));
console.log(testArray2);
console.log(sortedArray);

