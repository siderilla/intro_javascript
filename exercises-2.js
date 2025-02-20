// // ESERCIZIO A CASA

// // 1 - usando un ciclo crea una piramide come quella del primo 
// // esercizio del libro utilizzando solo UN console.log

// let pyramid = '';
// for (let i = 0; i < 7; i++) {
// 	pyramid += '#';
// 	console.log(pyramid);
<<<<<<< HEAD
=======
// }

// let i = 0;
// let startingString = '';
// while (i < 7) {
// 	i++;
//     startingString = startingString + '#';
// 	console.log(startingString);
>>>>>>> 228c92746825e3b315ed1ef63b752c537f3374da
// }

// COMMENTO - durante l'iterazione alla stringa pyramid si aggiungono #
// in ogni ciclo finché la condizione i < 7 non è soddisfatta, dunque questo
// accade per sette volte. siccome il valore di pyramid non si azzera mai a ogni iterazione
// la stringa aumenta di un # e lo stampa

// // // // OLDOLDOLD
// // // let i = 0;
// // // let startingString = '';
// // // while (i < 7) {
// // // 	i++;
// // //     startingString = startingString + '#';
// // // 	console.log(startingString);
// // // }

// // // for (let i = 0; i <= 7; i++) {
// // // 	console.log('#'.repeat(i));
// // // }

// // // let i = 7;
// // // let startingString = '';
// // // while (i != 0) {
// // // 	i--;
// // //     startingString = startingString + '#';
// // // 	console.log(startingString);
// // // }

// // // // COMMENTO - in sostanza è stato sufficiente far iterare un contatore
// // // // che ha permesso di aggiornare la stringa fino a sette volte aggiungendo ogni volta #
// // // // senza azzerarla mai, la differenza con la subject del libro è che così è possibile 
// // // // chiamare console.log una sola volta all'interno del ciclo


// 2 - usando un ciclo crea una piramide come quella del primo 
// esercizio del libro ma capovolta

// let pyramid = '';
// for (let i = 7; i > 0; i--) {
// 	pyramid = '';
// 	for (let j = 0; j < i; j++) {
// 		pyramid += '#';		
// 	}
// 	console.log(pyramid);
// }

// let startingString = '#######';
// let i = startingString.length;
// while (i > 0) {
// 	let finalString = '';
// 	for (let j = 0; j < i; j++) {
//     	finalString += startingString[j];
// 	}
// 	i--;
// 	console.log(finalString);
// }

// // COMMENTO - inizializzo una stringa con i miei # la cui lunghezza conto
// // e la assegno a i per inizializzare un contatore
// // nel ciclo finché i è maggiore di zero, la itero fino ad arrivare a 0 e questo 
// // mi permette, man mano che il numero scende di poter avviare un secondo contatore
// // annidato j che conta quanti # stampare, con i che fa da "blocco" o limitatore  

// 3 - usando un ciclo crea una piramide come quella dell'esempio:
//     #
//    ###
//   #####
//  #######
// #########

for (let i = 1; i <= 5; i++) { // conto le righe
	let spaces = '';
	let hashes = '';

	for (let j = 0; j < 5 - 1; j++) { // conto spazi prima riga = 1 dunque 5 - 1 = 4 spazi
		spaces += ' '; // aggiungo spazi nella stringa	
	}
	for (let j = 0; j < 2 * i - 1; j++) { // conto gli # 2 * 1(i) - 1 perché a ogni riga +2
		hashes += '#'; // aggiungo hashtag nella stringa	
	}
	console.log(spaces + hashes); // stampo spazi e hashtag allo stato attuale
}

// let i = 1;
// while (i < 9) {
// 	let finalString = '';
// 	let j = 0;

// 	if (i === 1) {
// 		j = 9 - i;
// 		let spaceChar = j / 2;
// 		for (let k = 0; k < spaceChar; k++) {
// 			finalString += (' ');
// 		// anche qui si può usare .repeat
// 		}
// 		finalString += ('#'); 
// 	} else {
// 		j = 9 - (i + 2);
// 		let spaceChar = j / 2;
// 		for (let k = 0; k < spaceChar; k++) {
// 			finalString += (' ');
// 		}
// 		// quando i = 1 stampi e ciao !!!!!peròòò!!!! 1 * 2 = 2 - 1 = 1 !!!!!
// 		// quando i = 2 siamo alla seconda riga però noi abbiamo bisogno
// 		// di tre hashtag i * 2 - 1?
// 		// quando i = 3 * 2 = 6 - 1 = 5
// 		// ma come faccio a usare direttamente (i + 2)?
// 		finalString += ('#');
// 	}
// 	console.log(finalString);
// 	i++;
// }

// // COMMENTO - prima tratto la prima riga come caso speciale perché per ogni riga
// // successiva mi basta aggiungere l'hashtag x 2 volte in più rispetto a quelli
// // già presenti dunque il mio hashtag ha come valore i + 2
// // ma nella prima riga di # ne abbiamo solo uno, dunque si fa un if a parte che vede
// // j = totalecaratteri - numerodihashtag dove j corrisponde al totale degli spazi
// // senza hashtag. a quel punto avremo sempre un numero pari e lo dividiamo per due
// // per ottenere solo la prima serie di spazi, quella che anticipa l'hashtag,
// // da stampare. quindi cosa succede che facciamo un bel j / 2 e lo assegno a una
// // nuova variabile che chiamo spaceChar. la inizializzo ogni volta nelle condizioni
// // if, altrimenti non si azzera ed è un casino 
// // dentro annido un for che conta (e assegna a finalString) quanti spazi 
// // essenzialmente deve stampare
// // usando k come contatore finché minore di spaceChar che avrà il valore di j/2
// // solo che ora non so bene come mettere la stampa degli hashtag in più e sono
// // le 23:46 .-.

// 4 - usando un ciclo logga i numeri da 100 a -100

// let i = -101
// while (i < 100) {
// 	i++;
// 	console.log(i);
// }

// for (let i = -100; i <= 100; i++) {
// 	console.log(i);	
// }

// // COMMENTO - beh l'unico accorgimento va fatto sul numero di partenza: 
// // se i è uguale a -101, se itera prima di stampare, chiaramente stamperà 
// // il numero successivo (ovvero -100)
// // di conseguenza l'ultimo numero sarà 100 solo se i è minore di 100 e non uguale

// let i = -100
// while (i <= 100) {
// 	console.log(i);
// 	i++;
// }

// // COMMENTO - alternativa per non avere i = -101

// 5 - usando un ciclo logga i numeri da 1 a 100 mettendo 
// un asterisco vicino ai multipli di 7

// let i = -100
// while (i <= 100) {
// 	if (i % 7 === 0) {
// 		console.log(i + '*')
// 	}
// 	console.log(i);
// 	i++;
// }

// 6 - usando un ciclo logga i numeri da 1 a 100 mettendo 
// un asterisco vicino ai quadrati perfetti

// for (let i = 1; i <= 100; i++) {
// 	if (Math.sqrt(i) % 1 === 0) {
// 		console.log(i + '*');
// 	} else {
// 		console.log(i);
// 	}
// }

// 7 - chiedi all'utente un numero (positivo) di partenza 
// e poi logga tutti i numeri dal numero dato fino a 0

// const inputNum = prompt("Scrivi un numero positivo");
// if (inputNum < 0) {
// 	inputNum = prompt("Noooo, ti ho chiesto positivo!");
// } else {
// 	for (let i = inputNum; i > 0; i--) {
// 		console.log(i);
// 	}
// 	console.log(0);
// }

// // COMMENTO - qua si usa prompt con una condizione che accetta solo i > 0
// // e poi itera i-- e stampa tutto

// 8 - chiedi all'utente un numero (qualsiasi) di partenza 
// e poi logga tutti i numeri dal numero dato fino a 100

// const inputNum = prompt("Scrivi un numero");
// if (inputNum < 100) {
// 	for (let i = inputNum; i < 100; i++) {
// 		console.log(i);
// 	}
// } else if (inputNum === 100) {
// 		console.log(100);
// } else {
// 	for (let i = inputNum; i > 100; i--) {
// 		console.log(i);
// 	}
// 	console.log(100);
// }

// 9 - chiedi all'utente due numeri e logga tutti i numeri 
// pari compresi tra i numeri forniti dall'utente

// const inputNum = prompt("Scrivi un numero");
// const inputNum2 = prompt("Scrivi un altro numero");
// if (inputNum < inputNum2) {
// 	for (let i = inputNum; i <= inputNum2; i++) {
// 		let isEven = (i % 2 === 0);
// 		if (isEven === true) {
// 			console.log(i)
// 		}
// 	}
// } else {
// 	for (let i = inputNum2; i <= inputNum; i++) {
// 		let isEven = (i % 2 === 0);
// 		if (isEven === true) {
// 			console.log(i)
// 		}	
// 	}
// }

// // COMMENTO - ho messo il controllo del numero pari dentro ciascun
// // for per azzerare il valore del contatore i che prende in ogni for
// // il numero in entrata scelto dall'utente

// 10 - chiedi all'utente quanti anni ha e il suo genere e digli 
// quante ore ha gia' vissuto e quante ore gli rimangono da vivere

// const userGender = prompt("M o F?");
// const userAge = prompt("Quanti anni hai?");
// let hoursPerYear = 8766;
// if (userGender === "F" || userGender === "f") {
// 	let totalHoursLived = userAge * hoursPerYear;
// 	console.log("Fino ad oggi hai vissuto " + totalHoursLived + " ore");
// 	let totalHoursleft = (86 - userAge) * hoursPerYear;
// 	console.log("Ti restano circa " + totalHoursleft + " ore da vivere");
// } else if (userGender === "M" || userGender === "m") {
// 	let totalHoursLived = userAge * hoursPerYear;
// 	console.log("Fino ad oggi hai vissuto " + totalHoursLived  + " ore");
// 	let totalHoursleft = (81 - userAge) * hoursPerYear;
// 	console.log("Ti restano circa " + totalHoursleft + " ore da vivere");
// } else {
// 	console.log("Se sei fluido vivi di più");
// }

// // COMMENTO - presupponendo un'età media per la mortalità IN ITALIA 
// // tra genere maschile(81) e femminile(86), impostiamo questi valori limite
// // a cui viene sottratta l'età dell'utente. con il risultato facciamo il calcolo
<<<<<<< HEAD
// // delle ore per anno presenti (che sono 8766 per year)
=======
// // delle ore per anno presenti (che sono 8766 per year)
>>>>>>> 228c92746825e3b315ed1ef63b752c537f3374da
