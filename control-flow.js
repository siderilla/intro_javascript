// prompt has a return value
// console.log is a void function

// prompt('what's your name?');
// console.log(console.log('hello'));
// console.log(prompt('what's your name?'));

// const userName = prompt("what's your name?");
// console.log("ciao " + userName);

// pop up message:
// alert("ciao " + userName);

// IF
// const userAge = prompt("how old are you?");
// if(userAge < 18) {
//     console.log("no alcoholics for you");
// }
// else {
//     console.log("more wine!");
// }

// versione maggiormente corretta:
// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
// // if(parseInt(userAge) < 18) {
// //     console.log("no alcoholics for you");
// // }
// // else {
// //     console.log("more wine!");
// // }
// in sostanza si assicura di convertire il valore in intero

// const userAge = prompt("how old are you?");
// if(parseInt(userAge) >= 18 && parseInt(userAge) <= 80) {
//     console.log("Welcome");
// }
// else if(parseInt(userAge) < 18) {
//     console.log("You can't vote");
// }
// else
// {
//     console.log("Buy a coffin");
// }

/////////////////////////////////

// CYCLES

// // while

// let i = 0;
// while (i < 11) {
//     console.log(i);
//     // i = i + 1;
//     // i++; - zuccherosintatticoooooo
//     // i = i + 2;
//     i += 2;
// }
// console.log("finish");

// let j = 0;
// while (j <= 10) {
//     // const square = j ** 2;
//     // console.log(square);
//     console.log(j**2);
//     j++;
// }

// numero a caso con la funzione math.random
// const secretNumber = Math.round(Math.random() * 10);

// while (true) {
//     const guessString = prompt("guess the num from 1 to 10");
//     const guessedNumber = parseInt(guessString);
//     if (guessedNumber === secretNumber){
//         alert("BRAVO!");
//         break;
//     } else {
//         alert("Try again");
//     }
// }

// let startingString = '';

// while(startingString.length <= 10){
//     startingString = startingString + '*';
// }
// console.log(startingString);


// // do while

// const pippo = 10;
// const pluto = 20;

// while (pippo > pluto) {
//     console.log('sono entrato');
// }

// do {
//     console.log('sono dentro do')
// } while (pippo > pluto);

// // for

// for (let i = 0; i < 10; i++) {
//     console.log("ciclo for " + i);
// }

// //ciclo infinito

// for (let i = 0; i < Infinity; i++) {

// }

// for (;;)

// let startingString = "";
// for (;;) {
//     startingString += '°'
//     if (startingString.length === 10) {
//         break;
//     }
// }
// console.log(startingString);

// for (let y = 0; y <= 3; y++) {
//     for (let x = 0; x <= 3; x++) {
//         console.log(`(x: ${x}, y: ${y})`)
//     }
    
// }

// for (let y = 0; y <= 3; y++) {
//     let row = '';
//     for (let x = 0; x <= 3; x++) {
//         row += `(x: ${x}, y: ${y}) `;
//     }
//     console.log(row);   
// }

// ctrl + k + f per formattare il codice indentazioni

// // switch lo usiamo per gestire scelte multiple molto lunghe

// const ageString = prompt('in che anno sei nato?')

// switch (ageString) {
//     case "1978":
//         alert("sei nato nel mio stesso anno")
//         break;
//     case "1990":
//         alert("mondiali")
//         break;
//     case "1984":
//         alert("laura")
//         break;
//     default:
//         alert("altro")
//         break;
// }