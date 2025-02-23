let globalJournal = generateJournal(30); // la funzione è hoist, dunque posso chiamarla anche prima 

function generateJournal(days) {
// ho creato tre array di condizioni varie da annotare sul diario (tempo, orario, evento)
	const events = ["has eaten peanuts", "has brushed his teeth", "has touched an oak tree"];
	const weather = ["cloudy", "full moon", "new moon", "clear sky"];
	const time = ["early morning", "afternoon", "evening"];

	let journal = [];
// array vuoto da riempire per generare il diario successivamente
	for (let i = 1; i <= days; i++) {
		let eventsRandom = events[Math.floor(Math.random() * events.length)];
		let weatherRandom = weather[Math.floor(Math.random() * weather.length)];
		let timeRandom = time[Math.floor(Math.random() * time.length)];
// sulla lunghezza di ciascun array creato precedentemente, applico math.random per sorteggiare a caso una delle condizioni e la salvo nella sua variabile random
		let hasTransformed = false;
// imposto la trasformazione su false di default

		if (weatherRandom === "full moon" && timeRandom === "evening" && eventsRandom === "has eaten peanuts") {
			hasTransformed = true;
// se le variabili random sono ugualissime a quelle determinate condizioni contemporaneamente, allora hasTransformed diventa true
		}

	journal.push({
		date: "Day " + i,
		event: eventsRandom,
		weather: weatherRandom,
		time: timeRandom,
		hasTransformed: hasTransformed
		});
// finché non finisce il ciclo -definito da days- pusho nel mio oggetto journal tutti i dati raccolti come chiavi + valori
	}
	return journal;
}

console.table(globalJournal);

function checkJournalData(globalJournal) {
// dentro globalJournal c'è tutto quello che ha fatto la funzione generateJournal, ficco tutti questi dati dentro la mia nuova funzione
// checkJournalData e itero:
	for (let i = 0; i < globalJournal.length; i++) {
// lungo la lunghezza di globalJournal, dunque finché non finisce
		if (globalJournal[i].hasTransformed) {
// se dentro globalJournal risulta un valore che corrisponde a hasTransformed (occhio non è la chiave, ma il valore!)
			console.log("When Jacques trasformed?\n" + globalJournal[i].date + " - correlated event: " + globalJournal[i].event)
// allora loggami la data e l'evento corrispondenti
		}		
	}
}

checkJournalData(globalJournal);

// i dati non si trascinano perché non sono esplosi

// const journal = [
// 	{
// 		date: "21/02/2025",
// 		timeBetween8pm10pm: true,
// 		weather: "cloudy",
// 		event: "walked in the park",
// 		hasTransformed: false
// 	},
// 	{
// 		date: "20/02/2025",
// 		timeBetween8pm10pm: true,
// 		weather: "full moon",
// 		event: "has eaten peanuts",
// 		hasTransformed: true
// 	},
// 	{
// 		date: "19/02/2025",
// 		timeBetween8pm10pm: false,
// 		weather: "crescent moon",
// 		event: "has touched an oak tree",
// 		hasTransformed: false
// 	}
// ]

// function checkTransformation(journal) {

// }

// waning moon - calante // new moon - luna nuova