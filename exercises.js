// let abc = "abc";
// console.log(abc.length);

// let startingString = '';
// for(i = 0; i < 7; i++) {
//     startingString = startingString+'#';
//     console.log(startingString);
// }

// let startingString = '';
// while (startingString.length < 7) {
//     startingString = startingString + '#';
//     console.log(startingString);
// }

// let pyramid = "";
// let height = parseInt(prompt("Insert a number"));
// if(height > 0) {
//     for (let i = 0; i < height; i++) {
//         pyramid += "#";
//         console.log(pyramid);
//     }
// }
// else {
//     alert("Only numbers");
// }

// for (let startString = "#"; startString.length < 7; startString += "#") {
//     console.log(startString);
// }

// FIZZBUZZ
// let i = 1
// while (i <= 100) 
// {
//     if (i % 3 == 0 && i % 5 == 0)  
//     {
//         console.log("fizzbuzz");
//     }
//     else if (i % 3 == 0)
//     {
//         console.log("fizz");
//     }
//     else if (i % 5 == 0)
//     {
//         console.log("buzz");
//     }
//     else {
//         console.log(i);
//     }
//     i++;
// }

// for (n = 1; n <= 100; n++) 
// {
//     if (n % 3 == 0 && n % 5 == 0)  
//         {
//             console.log("fizzbuzz");
//         }
//         else if (n % 3 == 0)
//         {
//             console.log("fizz");
//         }
//         else if (n % 5 == 0)
//         {
//             console.log("buzz");
//         }
//         else {
//             console.log(n);
//         }
// }


// let i = " "
// let j = "#"
// startString = "";
// for (let y = 1; y <= 8; y++) {
//     for (let x = 1; x <= 8; x++) {
//         if (y % 2 ) {
//             if (x % 2 ) {
//                 startString = startString + i;
//             } else {
//                 startString = startString + j;
//             } 
//         } else {
//             if (y % 2 ) {
//                 startString = startString + i;
//         } else {
//         startString = startString + j;
//         }
//     }
//     }
//     console.log(startString + "\n")
// }

let size = 8;
for (let y = 1; y <= size; y++) {
    startString = "";
    for (let x = 1; x <= size; x++) {
        if ((x + y) % 2 === 0) {
            startString = startString + " ";
        } else {
            startString = startString + "#";
        }
    }
    console.log(startString + "\n")
}