console.log("Ciao");
console.log("Miao");

// operatore typeof:
console.log(typeof 5);
console.log(typeof a);
console.log(typeof "a");
console.log(typeof true);
console.log(typeof NaN);

// NUMERI
5; // integer - interi
7.68; // float - decimali
3.1e3; // esponenziale di 3100
Infinity; // numero più grande possibile
-Infinity; // numero più piccolo possibile
NaN; // Not a Number

// operazioni
console.log(0/0);
console.log(10/0);
console.log("somma 5 + 7", 5 + 7);
console.log("prodotto 5 * 7", 5 * 7);
console.log("divisione 5 / 7", 5 / 7);
console.log("sottrazione 5 - 7", 5 - 7);
console.log("negativo -7", -7);
console.log("potenza 2**5", 2**5);
console.log("modulo 5 % 2", 5 % 2);
console.log('radice quadrata', Math.sqrt(9));
console.log('arrotondamento 9.6', Math.round(9.6));

// si possono usare sia le virgolette che gli apici per definire una stringa in js

// stringhe
console.log("234", 234);
console.log('io sono una "stringa"');
console.log('"l\'apostrofo"\npiruli newline'); 
// si usa backslash per inserire apici o virgolette come stringa

// backtick ALT + 96
// stringa interpolata: ovvero può eseguire il codice al suo interno quindi la backtick è molto potente
console.log(`"l'apostrofo" è importante
con la backtick non serve la newline`);
console.log(`la somma di 5 e 7 è ${5 + 7}`);
console.log('ciao a tutti ' + 'mi chiamo pippo');

// booleans - operatori logici true false
console.log("vero", true);
console.log("falso", false);

// not - !
console.log("not vero", !true);
console.log("not falso", !false);

// and - &&
console.log("vero and vero", true && true);
console.log("vero and falso", true && false);
console.log("falso and vero", false && true);
console.log("falso and falso", false && false);

// OR - ||
console.log("vero and vero", true || true);
console.log("vero and falso", true || false);
console.log("falso and vero", false || true);
console.log("falso and falso", false || false);

// undefined and NULL
console.log(typeof NULL);
console.log(typeof undefined);

// operatori confronto
// uguaglianza con conversione == // senza conversione ===
// diverso con conversione != // senza conversione !==
// di solito uguaglianza si usa == ma in javascript da problemi dunque si è implementato ===
console.log("cinque è uguale a cinque", 5 == 5);
console.log("cinque è uguale a cinque", 5 === 5);
console.log("cinque è uguale a sei", 5 == 6);
// il motivo è che una stringa non è uguale a un intero, ma in javascript usando solo == forza lo stesso la conversione
console.log("la stringa 5 è uguale a 5", "5" == 5);
console.log("la stringa 5 è uguale a 5", "5" === 5);

// minore < // minoreuguale <= // maggiore > // maggioreuguale >=
console.log("cinque è minore di sei", 5 < 6);

// variabili - var, let, const
// con let significa che permetto alla variabile di avere quel valore, ma può cambiare
let pippo = 5;
console.log(pippo);
console.log(pippo + 2);

pippo = 'stocazzo';
console.log(pippo);

// con const significa che quella variabile avrà sempre lo stesso valore assegnato la prima volta, non può cambiare
// const pluto = 5;
// console.log(pluto);
// console.log(pluto + 2);
// // meglio di default usare le const per evitare errori
// pluto = 'stocazzo';
// console.log(pluto);

// con var fa le cose in modo troppo a caso dunque meglio non usarlo: fonte di errori pericolosa
// paperino = 10;
console.log(paperino + 10);
var paperino = 5;

// norma CamelCase in javascript NON SI USA underscore
const numeroDaElevareAPotenza = 9;
const esponenteDellaPotenza = 2;
console.log(numeroDaElevareAPotenza ** esponenteDellaPotenza);

// short circuit operator
const qui = 5 || 6;
console.log(qui);
// per OR ovviamente falso non è un valore valido, dunque passa al secondo
const quo = false || 6;
console.log(quo);
const qua = 5 ?? 6;
console.log(qua);
// per ?? il booleano è un valore, dunque va bene e lo restituisce per primo
const que = false ?? 6;
console.log(que);
// ? da solo è l'operatore ternario insieme a :
// significato: cinque è maggiore di quattro? se sì restituisci il primo valore altrimenti (:) restituisci il secondo
const quu = 5 > 4 ? "si" : 20
console.log(quu);