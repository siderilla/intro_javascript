////////////////////////// 1 //////////////////////////
// piramide alternata:
// #
// * *
// # # #
// * * * *
// # # # # #

// for (let i = 1; i <= 5; i++) {
// 	let row = "";
// 	for (let j = 1; j < i; j++) {
// 		if (i % 2 === 0) {
// 			row += "* ";
// 		} else {
// 			row += "# ";
// 		}		
// 	}
// 	console.log(row);
// }

// i = 0;
// while (i < 5) {
// 	i++;
// 	console.log("#", i);
// }

////////////////////////// 2 //////////////////////////
// Piramide Numerica:
// Crea una piramide dove ogni riga contiene numeri invece di caratteri. Ad esempio:
    // 1
    // 2 2
    // 3 3 3
    // 4 4 4 4
    // 5 5 5 5 5

// for (let i = 1; i <= 5; i++) {
// 	let row = "";
// 	for (let j = 0; j < i; j++) {
// 		if (i === 1) {
// 			row += "1";
// 		} else if (i === 2) {
// 			row += "2 ";
// 		} else if (i === 3) {
// 			row += "3 ";
// 		} else if (i === 4) {
// 			row += "4 ";
// 		} else {
// 			row += "5 ";
// 		}		
// 	}
// 	console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
// 	let row = "";
// 	for (let j = 0; j < i; j++) {
// 		row += i + " ";	
// 	}
// 	console.log(row);
// }

////////////////////////// 3 //////////////////////////
// Piramide di Numeri Pari:
// Crea una piramide dove ogni riga contiene numeri pari. Ad esempio:
    // 2
    // 4 4
    // 6 6 6
    // 8 8 8 8
    // 10 10 10 10 10

// for (let i = 1; i <= 5; i++) {
// 	let row = "";
// 	for (let j = 0; j < i; j++) {
// 		row += (i * 2) + " ";	
// 	}
// 	console.log(row);
// }

////////////////////////// 4 //////////////////////////
// Piramide di Fibonacci:
// Crea una piramide dove ogni riga contiene i numeri della sequenza di Fibonacci. Ad esempio:
    // 1
    // 1 1
    // 2 3 5
    // 8 13 21 34

////////////////////////// 5 //////////////////////////
// Log dei Numeri Primi:
// Usa un ciclo per loggare tutti i numeri primi da 1 a 100.

// for (let i = 2; i <= 100; i++) {
// 	if (i / i === 1 && i / 1 === i) {
// 		console.log(i);
// 	}
// }

////////////////////////// 6 //////////////////////////
// Log dei Numeri Divisibili per 3 o 5:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 che sono divisibili per 3 o 5, ma non per entrambi.

////////////////////////// 7 //////////////////////////
// Log dei Numeri in Ordine Inverso:
// Usa un ciclo per loggare i numeri da 1 a 100 in ordine inverso, ma salta i numeri divisibili per 7.

////////////////////////// 8 //////////////////////////
// Log dei Numeri con Somma delle Cifre Pari:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 la cui somma delle cifre è un numero pari.

////////////////////////// 9 //////////////////////////
// Log dei Numeri con Cifre Dispari:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 che hanno tutte le cifre dispari.

////////////////////////// 10 //////////////////////////
// Log dei Numeri con Cifre Crescenti:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 le cui cifre sono in ordine crescente (es. 12, 123, 234, ecc.).

////////////////////////// 11 //////////////////////////
// Log dei Numeri con Cifre Decrescenti:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 le cui cifre sono in ordine decrescente (es. 21, 321, 432, ecc.).

////////////////////////// 12 //////////////////////////
// Log dei Numeri con Cifre Uguali:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 che hanno tutte le cifre uguali (es. 11, 22, 33, ecc.).

////////////////////////// 13 //////////////////////////
// Log dei Numeri con Cifre Alternate:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 che hanno cifre alternate (es. 121, 131, 242, ecc.).

////////////////////////// 14 //////////////////////////
// Log dei Numeri con Cifre Palindrome:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 che sono palindromi (es. 11, 22, 33, 121, ecc.).

////////////////////////// 15 //////////////////////////
// Log dei Numeri con Cifre Speculari:
// Usa un ciclo per loggare tutti i numeri da 1 a 100 che sono speculari (es. 12 e 21, 13 e 31, ecc.).


////////////////////////// CODEWARS //////////////////////////
// SUM NUMBERS

// function sum(numbers = []) {
// 	if (numbers.length === 0) {
// 		return 0;
// 	}

// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) {
// 	  sum += numbers[i]; 
// 	}
// 	return sum;
//   }
  
//   console.log(sum());
//   console.log(sum([1, 5.2, 4, 0, -1]))

// // VALIDA ALTERNATIVA:

//   function sum(numbers) {
// 	return numbers.reduce((a, b) => a + b, 0);
//   }

