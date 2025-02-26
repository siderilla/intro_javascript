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

const testArray2 = ["ciao", "miao", "bau"];
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

// funzione tiene dentro testArray tutti i numeri minori di 5
const newArray13 = testArray.filter(nbr => nbr < 5);
console.log ('keep less than 5', newArray13);