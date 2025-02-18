// // ESERCIZIO A CASA
// // 1 - usando un ciclo crea una piramide come quella del primo 
// // esercizio del libro utilizzando solo UN console.log

// let i = 0;
// let startingString = '';
// while (i < 7) {
// 	i++;
//     startingString = startingString + '#';
// 	console.log(startingString);
// }

// let i = 7;
// let startingString = '';
// while (i != 0) {
// 	i--;
//     startingString = startingString + '#';
// 	console.log(startingString);
// }

// // COMMENTO - in sostanza è stato sufficiente far iterare un contatore
// // che ha permesso di aggiornare la stringa fino a sette volte aggiungendo ogni volta #
// // senza azzerarla mai, la differenza con la subject del libro è che così è possibile 
// // chiamare console.log una sola volta all'interno del ciclo


// 2 - usando un ciclo crea una piramide come quella del primo 
// esercizio del libro ma capovolta


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

let i = 1;
while (i < 9) {
	let finalString = '';
	let j = 0;

	if (i === 1) {
		j = 9 - i;
		let spaceChar = j / 2;
		for (let k = 0; k < spaceChar; k++) {
			finalString += (' ');
		}
		finalString += ('#'); 
	} else {
		j = 9 - (i + 2);
		let spaceChar = j / 2;
		for (let k = 0; k < spaceChar; k++) {
			finalString += (' ');
		}
		// quando i = 1 stampi e ciao !!!!!peròòò!!!! 1 * 2 = 2 - 1 = 1 !!!!!
		// quando i = 2 siamo alla seconda riga però noi abbiamo bisogno
		// di tre hashtag i * 2 - 1?
		// quando i = 3 * 2 = 6 - 1 = 5
		// ma come faccio a usare direttamente (i + 2)?
		finalString += ('#');
	}
	console.log(finalString);
	i++;
}

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

// // COMMENTO - ummm itero i da 1 a 100 e anche j e aggiungo una condizione che verifica
// // se j * j = i ? FORSE ??????

// 7 - chiedi all'utente un numero (positivo) di partenza 
// e poi logga tutti i numeri dal numero dato fino a 0

// // COMMENTO - qua si usa prompt con una condizione che accetta solo i > 0
// // e poi itera i-- e stampa tutto

// 8 - chiedi all'utente un numero (qualsiasi) di partenza 
// e poi logga tutti i numeri dal numero dato fino a 100

// 9 - chiedi all'utente due numeri e logga tutti i numeri 
// pari compresi tra i numeri forniti dall'utente

// 10 - chiedi all'utente quanti anni ha e il suo genere e digli 
// quante ore ha gia' vissuto e quante ore gli rimangono da vivere