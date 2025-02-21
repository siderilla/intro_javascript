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

function avarageNumb(arrayOfNumb) {
	let sumOfElem = 0;
	let avarageElem = 0;
	for (let i = 0; i < arrayOfNumb.length; i++) {
        const element = arrayOfNumb[i];

        sumOfElem = sumOfElem + element;
		avarageElem = sumOfElem / arrayOfNumb.length;
    }
	return (avarageElem);
}

console.log(avarageNumb(array1));

///////////////////////  4  ////////////////////////
// restituire valore più basso e il più alto

function minAndMaxValue(arrayOfNumb) {
	let min = []; // 
	let max = []; // meglio = -Infinity
// siccome javascript casta da solo i valori che vengono 
// assegnati nelle variabili, avremmo potuto inizializzare min
// e max anche come stringhe ovvero: let min = '';

	for (let i = 0; i < arrayOfNumb.length; i++) {
		if (arrayOfNumb[i] < min) {
			min = arrayOfNumb[i];
		}
		if (arrayOfNumb[i] > max) {
			max = arrayOfNumb[i];
		}
	}
	return [min, max];
}

console.log(minAndMaxValue(array1));

// se trovi un valore minore di quello corrente aggiorni 
// finché non finisci l'iterazione nell'array idem con max

const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie']

///////////////////////  5  ////////////////////////
// filtrare tutti i nomi più grandi di 4 char
// PRIMO APPROCCIO:
// in questo caso, dentro all'array devo anche iterare dentro 
// ciascuna stringa e contare il num di char --- SBAGLIATO!!

function countStringChar(arrayOfStrings) {
	const newArray = [];
	// let myString = '';

	for (let i = 0; i < arrayOfStrings.length; i++) {
		const myString = arrayOfStrings[i];
		if (myString.length > 4) {
				newArray.push(myString);
		}	
// io avevo messo un ciclo for in più con l'idea di
// contare i char di ciascuna stringa, ma grazie a .length
// non è necessario farlo!	
	}
	return newArray;
}

console.log(countStringChar(array2));

///////////////////////  6  ////////////////////////
// trasformare tutte le stringhe in maiuscolo
// PROVA :
// const string = 'ANNA';
// let newStr = '';
// for (let i = 0; i < string.length; i++) {
// 	// const element = string[i];
// 	newStr = string[i].toLowerCase(string);
// 	}
// console.log(newStr);

function lowerToUpper(arrayOfStrings) {
	const newArray = [];
	// let myString = '';
    // è inutile inizializzare la stringa vuota qui perché poi dentro la si chiama di nuovo
	for (let i = 0; i < arrayOfStrings.length; i++) {
        const myString = arrayOfStrings[i].toUpperCase();
		// myString = arrayOfStrings[i].toUpperCase(arrayOfStrings[i]);
        // è inutile inserire la mia stringa anche dentro le parentesiiii
        // arrayOfStrings[i].toUpperCase() === toUpperCase(arrayOfStrings[i])
		newArray.push(myString);
	}
	return newArray;
}

console.log(lowerToUpper(array2));

// COMMENTO - in C accedevo alla tavola ascii per trovare il
// valore corrispondente dell'alfabeto minuscolo e lo convertivo 
// in maiuscolo iterando con una condizione che verificava
// if char >= 'a' && char <= 'z' 
// allora fai la conversione facendo scalare il valore di 'a'
// verso il valore di 'A' con una somma semplice
// in javascript forse c'è un modo più semplice e immediato
// per farlo, ma  ci devo ragionare su

///////////////////////  7  ////////////////////////
// mettere SOLO le iniziali maiuscole (ma lasciare il resto della stringa minuscola)

function onlyInitialsToUpper(arrayOfStrings) {
	const newArray = [];
	// let myString = '';

	for (let i = 0; i < arrayOfStrings.length; i++) {
		const myString = arrayOfStrings[i]; 
		newArray.push(myString[0].toUpperCase());
        // ergo manca sommare il resto della stringa - usa slice per tagliare la stringa
	}
	return newArray;
}

console.log('solo le iniziali: ', onlyInitialsToUpper(array2));

///////////////////////  8  ////////////////////////
// restituire una stringa composta dall'iniziale delle parole

function allInitialsToString(arrayOfStrings) {
	let myString = '';

	for (let i = 0; i < arrayOfStrings.length; i++) {
		myString += arrayOfStrings[i][0];
	}
	return myString;
}

console.log(allInitialsToString(array2));

///////////////////////  9  ////////////////////////
// contare tutti i char di tutte le stringhe (unico return)

function countAllChars(arrayOfStrings) {
	let myString = '';

	for (let i = 0; i < arrayOfStrings.length; i++) {
		myString += arrayOfStrings[i];
	}
	return myString.length;
}

console.log(countAllChars(array2));

///////////////////////  10  ////////////////////////
// eliminare le vocali dalle stringhe

function noMoreVowels(arrayOfStrings) {
    let myString = '';

    for (let i = 0; i < arrayOfStrings.length; i++) {
        // const element = arrayOfStrings[i];
        if (arrayOfStrings[i] !== 'a') {

        }
        
    }
}

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