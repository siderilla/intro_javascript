// // in javascript gli array possono essere di qualsiasi cosa anche tutto insieme

// const pippo = 12;
// const array1 = ["ciao", 23, 23.12, true, [], ["mondo"], pippo]; // è possibile ma non raccomandabile

// console.log('array1', array1); // si aggiunge una stringa per fare riferimento al nome dell'array o oggetto che si sta chiamando

// const array2 = [];
// array2.push(4); // assegna un valore dentro l'array in ciascun indice
// array2.push(8);
// array2.unshift(12); // assegna il valore ma all'inizio dell'array, anziché in fondo
// array2.unshift(11);
// array2.shift(11); // rimuove il valore in testa inserito con unshift
// const removed = array2.pop(); // rimuove l'ultimo valore

// console.log('array2', array2, removed);

// console.log('get second element in array of array2', array2[1]);
// array2[1] = 27
// console.log('change second element in array2', array2);

// const array3 = [123, 12, 45, 34, 1, 2, 45, 34]; // l'array può contenere più elementi uguali

// for (let i = 0; i < array3.length; i++) {
//     const element = array3[i];   
//     console.log(`l'elemento a indice ${i} è ${element}`);
// }

// for (const element of array3) {
//     console.log(element);
// }

// // CONCAT - concatenare array

// const array4 = [1000, 1001];
// const array5 = array3.concat(array4);
// console.log(array5);

// // SLICE
// // const array6 = array5.slice(2, 5); // il range che taglia il primo è incluso, mentre l'ultimo no
// const array6 = array5.slice(2, -2); // il range che taglia e restituisce è dal 2 elemento al -2 (partendo dal fondo)
// console.log('slice', array6);

// // SPLICE
// const removedElements = array5.splice(1, 3) // vuole due numeri, il primo da dove partire e il secondo quanti cancellarne, se lasci vuoto cancella tutto
// console.log('splice', array5, removedElements);

// // SORT
// array5.sort(); // può essere utile ma ordina in modo posizionale (prima 1 poi 2, 3 e non in maniera crescente del valore numerico)
// console.log('sort', array5);

// // INDEX
// const index = array5.indexOf(1000);
// console.log('1000 è a indice ' + index);

// // MAPPING

// const newArray = [];
// const array7 = [2, 4, 1, 33, 56, 78, 12, 5, 6, 7, 4];
// function doubleArrayElem(arrayOfNum) {
//     for (let i = 0; i < arrayOfNum.length; i++) {
//         const element = arrayOfNum[i];
//         const double = element * 2; // eseguo la trasformazione
//         newArray.push(double);
//     }
//     return newArray;
// }

// console.log('double', doubleArrayElem(array7));

// function addOneToElem(arrayOfNum) {
//     for (let i = 0; i < arrayOfNum.length; i++) {
//         const element = arrayOfNum[i];
//         const plusOne = element + 1;
//         newArray.push(plusOne);
//     }
//     return newArray;
// }

// console.log('plus one', array7);

// // FILTERING - riduce il numero di elementi

// function removeLargerThan30(arrayOfNum) {
//     const newArray = [];

//     for (let i = 0; i < arrayOfNum.length; i++) {
//         const element = arrayOfNum[i];
        
//         if(element <= 30) {
//             newArray.push(element); // basta aggiungere un if per poter filtrare gli elementi scelti
//         }
//     }
//     return newArray;
// }
// const array10 = removeLargerThan30(array7);
// console.log(array10);

// function keepEven(arrayOfNum) {
//     const newArray = [];

//     for (let i = 0; i < arrayOfNum.length; i++) {
//         const element = arrayOfNum[i];
        
//         if(element % 2 === 0) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// // // REDUCE

// function sumAllElem(arrayOfNum) {
//     let accumulator = 0;

//     for (let i = 0; i < arrayOfNum.length; i++) {
//         const element = arrayOfNum[i];
        
//         accumulator = accumulator + element;

//         }
//     return accumulator;
// }

// // const array11 = sumAllElem(array7);
// // console.log('reduce', array11);



// // function multiplyAllElem(arrayOfNum) {
// //     let accumulator = 1; // deve partire da 1 se no poi 0 * qualsiasi numero darà sempre 0

// //     for (let i = 0; i < arrayOfNum.length; i++) {
// //         const element = arrayOfNum[i];
        
// //         accumulator = accumulator * element;

// //         }
// //     return accumulator;
// // }

// // const array11 = sumAllOdd(array7);
// // console.log('reduce', array11);


// function sumAllOdd(arrayOfNum) {
//     let accumulator = 0; // deve partire da 1 se no poi 0 * qualsiasi numero darà sempre 0

//     for (let i = 0; i < arrayOfNum.length; i++) {
//         const element = arrayOfNum[i];
        
//         if (element % 2 !== 0) {
//             accumulator = accumulator + element;
//         }
//     }
//     return accumulator;
// }

// const array11 = sumAllOdd(array7);
// console.log('reduce', array11);


// function sumAllEvenElem(arrayOfNum) {
//     return sumAllElem(keepEven(arrayOfNum))
// }

// const array12 = sumAllEvenElem(array7);
// console.log('concatena funzioni', array12);

// function sumEvenAndOdd(arrayOfNum) {
//     let accumulatorEven = 0;
//     let accumulatorOdd = 0;

//     for (let i = 0; i < arrayOfNum.length; i++) {
//         const element = arrayOfNum[i];
        
//         if (element % 2 === 0) {
//             accumulatorEven = accumulatorEven + element;
//         } else {
//             accumulatorOdd = accumulatorOdd + element;
//         }
//     }
//     return [accumulatorEven, accumulatorOdd]; 
//     // se nel return voglio mettere più di un ritorno, separati da virgola tra quadre insomma è tipo array
// }

// const array13 = sumEvenAndOdd(array7);
// console.log('somma even e odd separatamente', array13);

// function sumEvenAndOdd(arrayOfNum) {
//     let accumulator = [0, 0]; // starting point è diverso da accesso a indice

//     for (let i = 0; i < arrayOfNum.length; i++) {
//         const element = arrayOfNum[i];
        
//         if (element % 2 === 0) {
//             accumulator[0] = accumulator[0] + element;
//         } else {
//             accumulator[1] = accumulator[1] + element;
//         }
//     }
//     return (accumulator); 
//     // se nel return voglio mettere più di un ritorno, separati da virgola tra quadre insomma è tipo array
// }

// const array14 = sumEvenAndOdd(array7);
// console.log('somma even e odd separatamente', array14);

// ////////////////// INTERVALLO ////////////////////
// // MEMORIA STACK HEAP - esiste il garbagecollector che pulisce la memoria al posto nostro :')

// // let number1 = 27; // invece la variabile non viene salvata in memoria
// // function stupidFunction(number) {
// //     number = number * 2;
// // }

// // stupidFunction(number1);
// // console.log(number1);

// let array1 = [27]; // accede al valore, perché l'array ha una memoria stack che gli viene assegnata

// // function stupidFunction2(array) {
// //     array[0] = array[0] * 2;  
// // // brutto da vedere, meglio non modificare direttamente il valore nell'array, ma manipolare copie
// // }

// // stupidFunction2(array1);
// // console.log(array1);

// function lessStupidFunction(array) {
//     // FACCIO UNA COPIA dell'array
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         newArray.push(element);
//     }
//     newArray[0] = newArray[0] * 2;
//     return newArray;
// }

// array1 = lessStupidFunction(array1)
// console.log('manipolo copia array', array1);


// MATRICI

const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0]];

function navigateArray(array) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            console.log(`l'elemento ${element} è in posizione ${i}, ${j}`)
        }
    }
}

console.log(array3);
navigateArray(array3);