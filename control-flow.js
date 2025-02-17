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

// CYCLES
// while
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

while (true) {
    const guessString = prompt("guess the num from 1 to 10");
    const guessedNumber = parseInt(guessString);
    if (guessedNumber === 6){
        alert("BRAVO!");
        break;
    } else {
        alert("Try again");
    }
}
// do while
// for