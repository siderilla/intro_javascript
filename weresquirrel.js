let journal = generateJournal(30);

function generateJournal(days) {
	const events = ["has eaten peanuts", "has brushed his teeth", "has touched an oak tree"];
	const weather = ["cloudy", "full moon", "new moon", "clear sky"];
	const time = ["early morning", "afternoon", "evening"];

	let journal = [];

	for (let i = 1; i <= days; i++) {
		let eventsRandom = events[Math.floor(Math.random() * events.length)];
		let weatherRandom = weather[Math.floor(Math.random() * weather.length)];
		let timeRandom = time[Math.floor(Math.random() * time.length)];
		let hasTransformed = false;

		if (weatherRandom === "full moon" && timeRandom === "evening" && eventsRandom === "has eaten peanuts") {
			hasTransformed = true;
		}

	journal.push({
		date: "Day " + i,
		event: eventsRandom,
		weather: weatherRandom,
		time: timeRandom,
		hasTransformed: hasTransformed
		});
	}
	return journal;
}

console.table(journal);

function checkJournalData(journal) {
	for (let i = 0; i < journal.length; i++) {
		if (journal[i].hasTransformed) {
			console.log("When Jacques trasformed?\n" + journal[i].date + " - correlated event: " + journal[i].event)
		}		
	}
}

checkJournalData(journal);

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