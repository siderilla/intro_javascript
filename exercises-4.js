const array1 = [23, 14, 56, 3, 0, -1, 55, -12, 60, 8];

///////////////////////  1  ////////////////////////
// filtrare tutti i numeri minori o uguali a zero

function negativeNumbAndZero(arrayOfNumb) {
    const newArray = [];

    for (let i = 0; i < arrayOfNumb.length; i++) {
        const element = arrayOfNumb[i];

        if(element <= 0) {
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(negativeNumbAndZero(array1));

///////////////////////  2  ////////////////////////
// convertire celsius in farhenheit

function celsiusToFarh(arrayOfNumb) {
    const newArray = [];

    for (let i = 0; i < arrayOfNumb.length; i++) {
        const element = arrayOfNumb[i];
        const convertion = (element * 9/5) + 32;
        newArray.push(convertion);
    }
    return newArray;
}

console.log(celsiusToFarh(array1));


///////////////////////  3  ////////////////////////
// fare la media dei valori 

function sumAllElem(arrayOfNum) {
    let accumulator = 0;

    for (let i = 0; i < arrayOfNum.length; i++) {
        const element = arrayOfNum[i];
        
        accumulator = accumulator + element;
//// SOMMA FATTA - MANCA FARE LA MEDIA /////
        }
    return accumulator;
}

console.log(sumAllElem(array1));

// function avarageNumb(arrayOfNumb) {
//     const newArray = [];
//     for (let i = 0; i < arrayOfNumb.length; i++) {
//         const element = arrayOfNumb[i];
//         const sumOfElem =  
//     }
// }

///////////////////////  4  ////////////////////////
// restituire valore più basso e il più alto

const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie']

///////////////////////  5  ////////////////////////
// filtrare tutti i nomi più grandi di 4 char

///////////////////////  6  ////////////////////////
// trasformare tutte le stringhe in maiuscolo

///////////////////////  7  ////////////////////////
// mettere SOLO le iniziali maiuscole

///////////////////////  8  ////////////////////////
// restituire una stringa composta dall'iniziale delle parole

///////////////////////  9  ////////////////////////
// contare tutti i char di tutte le stringhe (unico return)

///////////////////////  10  ////////////////////////
// eliminare le vocali dalle stringhe

///////////////////////  11  ////////////////////////
// restituire un array di numeri che sono le lunghezze delle singole parole

const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0]];

///////////////////////  12  ////////////////////////
// restituire un array di numeri che sono le lunghezze dei singoli array

///////////////////////  13  ////////////////////////
// sommare tutti i numeri in tutti gli array

///////////////////////  14  ////////////////////////
// sommare tutte le lunghezze degli array

///////////////////////  15  ////////////////////////
// sommare tutti i numeri con indice uguale e restituire un array di risultati