// // ALL MY FUNCTIONS

// function filter(array, filteringFunction) {
//     const parkingArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (filteringFunction(element, i, array)) {
//             parkingArray.push(element);
//         }
//     }
//     return parkingArray;
// }

// function reduce(array, reducingFunction, startingAccumulator) {
//     let accumulator = startingAccumulator;
//     for (let i = 0; i < array.length; i++) {
//         const current = array[i]; // elemento corrente su array
//         accumulator = reducingFunction(accumulator, current, i, array);
//     }
//     return accumulator;
// }

// function map(array, mappingFunction) {
//     const parkingArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const newElement = mappingFunction(element, i, array);

//         parkingArray.push(newElement);
//     }
//     return parkingArray;
// }


// const array1 = [23, 14, 56, 3, 0, -1, 55, -12, 60, 8];

// ///////////////////////  1  ////////////////////////
// // filtrare tutti i numeri minori o uguali a zero (FILTER)

// // versione brutta:

// // function isMinorEqualZero(nbr) {
// //     if (nbr <= 0) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// // const minOrEqualZero = filter(array1, isMinorEqualZero); // chiamo filter() devo specificare com'è la funzione
// // se voglio che chiami la funzione nella libreria allora la notazione è .filter

// const minOrEqualZero = array1.filter(nbr => nbr <= 0);
// console.log ('filter numbers less or equal to zero', minOrEqualZero);

// ///////////////////////  2  ////////////////////////
// // convertire celsius in farhenheit (MAP)

// // versione brutta:

// // function convertionCelsius(num) {
// //     const newFarh = (num * 9/5) + 32;
// //     return newFarh ;
// // }

// const convertCelsiusToFar = array1.map(num => (num * 9/5) + 32);
// console.log ('map celsius to far', convertCelsiusToFar);

// ///////////////////////  3  ////////////////////////
// // fare la media dei valori (REDUCE)

// // versione brutta:

// // function avarageArray(arrayOfNumbers) {
// //     let accumulator = 0;
// // 	for (let i = 0; i < arrayOfNumbers.length; i++) {
// // 		const current = arrayOfNumbers[i];
// // 		accumulator += current;
// // 	}
// //     return accumulator;
// // }

// // const sumAll = avarageArray(array1);
// // const avarageAv = sumAll / array1.length;

// const avarageAv = array1.reduce((a, c) => (a + c), 0) / array1.length;
// console.log('avarage of numbers:', avarageAv);


// ///////////////////////  4  ////////////////////////
// // restituire valore più basso e il più alto (REDUCE)

// const smallerAndGreaterValue = reduce(array1, function(a, c) {
//     return [
//         Math.min(a[0], c),
//         Math.max(a[1], c)
//     ];
// }, [Infinity, -Infinity]);

// console.log('smaller and greater value:', smallerAndGreaterValue);

// // const smallerAndGreaterValue = array1.reduce((acc, current) => {
// //     return [
// //         Math.min(acc[0], current),
// //         Math.max(acc[1], current)
// //     ];
// // }, [Infinity, -Infinity]);

// // console.log('smaller and greater value:', smallerAndGreaterValue);

// const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie']

// ///////////////////////  5  ////////////////////////
// // filtrare tutti i nomi più grandi di 4 char (FILTER)

// const filterNames = array2.filter(str => str.length > 4);
// console.log ('names greater than 4 chars:', filterNames);

// ///////////////////////  6  ////////////////////////
// // trasformare tutte le stringhe in maiuscolo (MAP)

// const stringToUpper = array2.map(function(str) {
// 	return str.toUpperCase();
// });
// console.log('to upper case strings:', stringToUpper);

// ///////////////////////  7  ////////////////////////
// // mettere SOLO le iniziali maiuscole (MAP)

// const initialToUpper = array2.map(function(str) {
// 	return str[0].toUpperCase() + str.slice(1);
// });
// console.log('to upper case initial:', initialToUpper);

// ///////////////////////  8  ////////////////////////
// // restituire una stringa composta dall'iniziale delle parole (REDUCE)

// const onlyInitials = array2.reduce((a, c) => a + c[0], "");
// console.log('only initial:', onlyInitials);

// ///////////////////////  9  ////////////////////////
// // sommare tutti i char di tutte le stringhe (unico return) (REDUCE)

// const sumCharsToNum = array2.reduce((a, c) => a += c.length, 0);
// console.log('total number of characters:', sumCharsToNum);

// ///////////////////////  10  ////////////////////////
// // eliminare le vocali dalle stringhe (MAP)

// ///////////////////////  11  ////////////////////////
// // restituire un array di numeri che sono le lunghezze delle singole parole (MAP)

// const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0]];

// ///////////////////////  12  ////////////////////////
// // restituire un array di numeri che sono le lunghezze dei singoli array (MAP)

// ///////////////////////  13  ////////////////////////
// // sommare tutti i numeri in tutti gli array (REDUCE)

// ///////////////////////  14  ////////////////////////
// // sommare tutte le lunghezze degli array (REDUCE)

// ///////////////////////  15  ////////////////////////
// // sommare tutti i numeri con indice uguale e restituire un array di risultati (REDUCE)

// // const sumOfEqualIndex = array3.reduce((a, c, i, original) => { // come si sceglie l'ordine in cui passiamo i parametri?
// //     if (i === 0) {
// //         a = c.map((n, i) => {
// //             original.forEach(array => {
// //                 sum += array[i];
// //             });
// //             return sum;
// //         })
// //         return a;
// //     } else {
// //         a = a.reduce((a, c, ))
// //     }
// // }, []);

// function sumOfEqualIndex(arrayOfArrays) {
    
//     //1,2,3 -> 4,2,3
//     const parkingArray = [];

//     for (let i = 0; i < arrayOfArrays.length; i++) {
//         //3,2,1,0
//         const array = arrayOfArrays[i];
//                 //0
//         for (let j = 0; j < array.length; j++) {
//                     //3
//             const element = array[j];
//             if (parkingArray[j]) { // sì esiste abbiamo 1,2,3
//                 parkingArray[j] += element; // dunque ci sommo 3(indice0) a 1(indice0)
//             } else {
//                 parkingArray[j] = element; // se è vuoto riempi - nel primo giro succede, al primo sottoarray
//             }
//         }
//     }
//     return parkingArray;
// }

// console.log(sumOfEqualIndex(array3));

// const sumOfEqualIndex2 = array3.reduce((a, c) => {
//     for (let j = 0; j < c.length; j++) {
//         const element = c[j];
//         if (a[j]) {
//             a[j] += element;
//         } else {
//             a[j] = element;
//         }
//     }
//     return a;
// }, []);

// console.log(sumOfEqualIndex2);

///////////////////////////////// HOWTOSORT /////////////////////////////////////

const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    marks: [7, 8 ,4],
    yob: 1995,
    nationality: 'italy',
    gender: 'm',
  }
  
  const Jan = {
    name: 'jan',
    surname: 'stigliani',
    marks:  [7, 9 ,9],
    yob: 2000,
    nationality: 'italy',
    gender: 'm'
  }
  
  const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    marks:  [5, 8 ,3],
    yob: 1981,
    nationality: 'italy',
    gender: 'm'
  }
  
  const sara =  {
    name: 'sara',
    surname: 'de prà',
    marks:  [9, 4 ,7],
    yob: 1989,
    nationality: 'italy',
    gender: 'fluid'
  }
  
  const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    marks:  [7, 9 ,9],
    yob:2003,
    nationality: 'ecuador',
    gender: 'm'
  }
  
  const laura = {
    name: 'laura',
    surname: 'mazza',
    marks:  [3, 8 ,9],
    yob: 1984,
    nationality: 'italy',
    gender: 'f'
  }
  
  const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    marks:  [8, 8 ,8],
    yob: 1993,
    nationality: 'albanese',
    gender: 'peanut'
  }
  
  const hugo = {
    name: 'hugo',
    surname: 'martinez',
    marks:  [5, 8 ,8],
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f'
  }

  const hugo2 = {
    name: 'hugo',
    surname: 'evil',
    marks:  [5, 8 ,8],
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f'
  }

  const laura2 = {
    name: 'laura',
    surname: 'old',
    marks:  [3, 8 ,9],
    yob: 1920,
    nationality: 'italy',
    gender: 'f'
  }

const allStudents = [lorenzo, Jan, giovanni, sara, jeremias, laura, eusebio, hugo, laura2, hugo2]
console.log(allStudents);

// function sortByAge(student1, student2) {
//     const yob1 = student1.yob;
//     const yob2 = student2.yob;

//     return yob1 - yob2;
// }

// function sortByAgeAndSurname(student1, student2) {
//     const yob1 = student1.yob;
//     const yob2 = student2.yob;
//     if (yob1 - yob2 === 0) { // oppure yob1 === yob2
//         const surname1 = student1.surname;
//         const surname2 = student2.surname;
//         return surname1.localeCompare(surname2);
//     }
//     return yob1 - yob2;
// }

// allStudents.sort(sortByAgeAndSurname);
// console.log(allStudents);


///////////////////////  1  ////////////////////////
// mettere in ordine gli studenti per nome e in caso di omonimia 
// usare come ordine  l'età crescente

// function sortByNameAndAge(student1, student2) {
//     const name1 = student1.name;
//     const name2 = student2.name;

//     if (name1 === name2) {
//         const yob1 = student1.yob;
//         const yob2 = student2.yob;
//         return yob2 - yob1;
//     }

//     return name1.localeCompare(name2);
// }
// allStudents.sort(sortByNameAndAge);
// console.log(allStudents);

///////////////////////  2  ////////////////////////
// mettere in ordine gli studenti per media dei voti

function avarageAllMarks(arrayOfMarks) {
    let sum = 0;
    for (let i = 0; i < arrayOfMarks.length; i++) {
        const currentMark = arrayOfMarks[i];
        sum += currentMark;
    }
    const avarage = sum / arrayOfMarks.length;
    return avarage;
}

function sortByAvarageMarks(student1, student2) {
    const avarageMarks1 = avarageAllMarks(student1.marks);
    const avarageMarks2 = avarageAllMarks(student2.marks);

    return avarageMarks1 - avarageMarks2;
}

allStudents.sort(sortByAvarageMarks);
console.log(allStudents);