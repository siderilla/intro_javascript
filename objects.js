//////////////////////////////////////
// gli oggetti sono una struttura dati in js che hanno un nome un po' equivoco (maledetti!)
// // // si chiamano dictionary in python
// una struttura dati key:value
// un oggetto si inizializza con le graffe
// gli oggetti contentono tipi diversi

// // l'ordine delle key non è garantito - di solito è alfabetico ma dipende dal browser, 
// // la documentazione js non garantisce l'ordinamento

// const emptyObj = {};

// const student = {
//     name: "Andrea",
//     surname: "Asioli",
//     yob: 1978,
//     marks: [9, 10, 8,],
//     // marksMean: () => student.marks.reduce((a, c) => {
//     //     a = a + c;
//     //     return a;
//     // }, 0) / student.marks.length
//     // marksMean: function () {
//     //     let sum = 0;
//     //     for (let i = 0; i < student.marks.length; i++) {
//     //         const element = student.marks[i];
//     //         sum += element;
//     //     }
//     //     const mean = sum / student.marks.length;
//     //     return mean;
//     // },
//     address: {
//         street: "via canneto il curto",
//         streetNo: 12,
//         cap: 16123
//     },
//     isMarried: false // BEST PRACTICIES
//     // "is married": false è equivalente MA SCHIFO
// }

// console.log(student);

// // accedere alle value è oggetto.key: // BEST PRACTICIES
// console.log(student.name);

// // accesso alla value equivalente è oggetto["key"]: // ma schifo, a meno che 
// // qualcuno non ha usato la key tra virgolette come sopra
// console.log(student["surname"]);

// console.log(student.address.street); // si scende nell'albero delle key

// const startingObj = {};
// console.log(startingObj);
// startingObj.name = "starting object"; // posso riempire mano a mano gli oggetti di keyvalue direttamente così
// startingObj.creationDate = "21/02/2025";
// console.log(startingObj);

// const book1 = {
//     title: "eloquent Javascript",
//     author: "Marjin Heverbeke",
//     edition: 4,
//     yop: 2024,
//     isAvailable: true
// }

// si può ciclare dentro l'oggetto come fosse un array? SI con "for in"

// for (const key in book1) {
//     if (Object.prototype.hasOwnProperty.call(book1, key)) {
//         const value = book1[key];
//         console.log(`il valore associato alla chiave ${key} è ${value}`);
//     }
// }

// a cosa serve ciclare un oggetto? esempi random:
// cicli tutte le prioprietà e le rendi maiuscole o minuscole a seconda
// cercami tutti i valori true 

// const arrayOfKeys = Object.keys(book1);
// console.log(arrayOfKeys);

// for (let i = 0; i < Object.keys(book1).length; i++) {
//     const key = Object.keys(book1)[i];
//     const value = book1[key];
//     console.log(`il valore associato alla chiave ${key} è ${value}`);
// }

// const arrayOfValues = Object.values(book1);
// console.log(arrayOfValues);

// const arrayOfEntries = Object.entries(book1);
// console.log(arrayOfEntries);

// // const number1 = 6; // valore assegnato in partenza
// // number1 = 12; // ovviamente da errore perché è una costante, non può cambiare il valore assegnato in partenza

// il contenitore è const, ma il contenuto può cambiare

// book1 = {
//     title: "odissea",
//     author: "omero",
//     edition: 112000,
//     yop: 2023,
//     isAvailable: false
// }

// Object.freeze(book1);

// book1.title = "odissea";
// book1.author = "omero";

// console.log(book1);

// const book2 = book1;

// book2.title = 'arietty'; // cambia il contenuto e lascia però il contenitore costante
// console.log(book1);



const student = {
    name: "Andrea",
    surname: "Asioli",
    yob: 1978,
    marks: [9, 10, 8],
    address: {
        street: "via canneto il curto",
        streetNo: 12,
        cap: 16123
    },
    isMarried: false
}

console.log(student);
console.table(student); // con table console.log è costretto a esplodere tutti gli oggetti e dunque 
// fa vedere il valore corretto precedente alla modifica
// ma visto che table per oggetti particolarmente complessi viene un casino da consultare esiste JSON!
console.table(JSON.stringify(student));

student.name = "andreino";
student.address.streetNo = 1000000;

console.log(student); // a volte non è affidabile, perché si trascina dietro l'ultimo valore anche per la value precedente
console.table(student);


// // HELLO JSON!

console.table(JSON.stringify(student)); // stringify di json serve a rendere stringa 

const studentString = '{"name":"giovanni","surname":"sussarellu","yob":1981,"marks":[9,10,8],"address":{"street":"via giovanni","streetNo":3,"cap":16123},"isMarried":false}'
const student2 = JSON.parse(studentString);
console.log(student2);