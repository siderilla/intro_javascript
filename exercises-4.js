///////////////////////  1  ////////////////////////
// creare un oggetto studente per ogni partecipante al corso
// l'oggetto dovrà avere le seguenti keys:
// - name, surname, gender, marks, yob, nationality
// mettete tutti gli oggetti dentro un array

const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    yob: 1995,
    nationality: 'italy',
    gender: 'm',
}
  
const Jan = {
    name: 'jan',
    surname: 'stigliani',
    yob: 2000,
    nationality: 'italy',
    gender: 'm'
}
  
const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    yob: 1981,
    nationality: 'italy',
    gender: 'm'
}
  
  const sara =  {
    name: 'sara',
    surname: 'de prà',
    yob: 1989,
    nationality: 'italy',
    gender: 'fluid'
  }
  
  const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    yob: 2003,
    nationality: 'ecuador',
    gender: 'm'
  }
  
  const laura = {
    name: 'laura',
    surname: 'mazza',
    yob: 1984,
    nationality: 'italy',
    gender: 'f'
  }
  
  const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    yob: 1993,
    nationality: 'albanese',
    gender: 'peanut'
  }
  
  const hugo = {
    name: 'hugo',
    surname: 'martinez',
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f'
  }

const allStudents = [lorenzo, Jan, giovanni, sara, jeremias, laura, eusebio, hugo]
console.log(allStudents);

///////////////////////  2  ////////////////////////
// scrivere una funzione che restituisca l'età media degli studenti

function ageAvarage(array) {
    let sum = 0;
	for (let i = 0; i < array.length; i++) {
		const element = array[i].yob;
		let age = 2025 - element;
		sum += age;
	}
	let avarage = sum / array.length;
	return avarage;
}

console.log(ageAvarage(allStudents));

///////////////////////  3  ////////////////////////
// scrivere una funzione che restituisca un array di stringhe
// ogni stringa dovrà avere questo formato "nome/cognome"

function nameSurname(array) {
	const newArray = [];
	let newStr = '';
	for (let i = 0; i < array.length; i++) {
		const element = array[i].name + '/' + array[i].surname;
		newStr = element;
		newArray.push(newStr);
	}
	return newArray;
}

console.log(nameSurname(allStudents));

///////////////////////  4  ////////////////////////
// scrivere una funzione che restituisca la somma dei maschi e delle femmine

function howMuchGender(array) {
	let sumMale = 0;
	let sumFemale = 0;
	let otherGender = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i].gender === 'f') {
			sumFemale++;
		} else if (array[i].gender === 'm') {
			sumMale++;
		} else {
			otherGender++;
		}
	}
	console.log('total m: ' + sumMale);
	console.log('total f: ' + sumFemale);
	console.log('other: ' + otherGender);
}

howMuchGender(allStudents);

///////////////////////  5  ////////////////////////
// scrivere una funzione che restituisca la media delle medie degli studenti

///////////////////////  6  ////////////////////////
// scrivere una funzione che restituisca un oggetto così strutturato:
// {nationality1:[student1Name, student2Name, ...], nationality2:[student1Name, student2Name, ...]}

function orderByNationality(array) {
	const nationalityList = {};
	for (let i = 0; i < array.length; i++) {
		const nationality = array[i].nationality;
		const name = array[i].name;

		if (nationalityList[nationality]) { // se esiste già, pusha il nome corrente
			nationalityList[nationality].push(name);
		} else {
			nationalityList[nationality] = [name]; // se non è presente nell'array, crealo e assegna il nome corrente
		}	
	}
	return nationalityList;
}

console.log(orderByNationality(allStudents));

///////////////////////  7  ////////////////////////
// https://jessbayer.com
