// // chiamo il tipo di variabile + nome = funzione() da assegnare
// const gridaSchiappa = function() {
//     console.log('SCHIAPPAAAA!')
// }

// console.log(typeof gridaSchiappa);
// gridaSchiappa();


// // NON USARE MAI questa roba
// const gridaSchiappa2 = function(name) {
//     console.log (name + ' SCHIAPPAAAA!');
// }

// // USA SEMPRE QUESTA
// function gridaSchiappa2(name) {
//     console.log(name + ' SCHIAPPAAAAAA!');
// }

// gridaSchiappa2('pippo'); 
// gridaSchiappa2('ciao'); 
// gridaSchiappa2(2);
// gridaSchiappa2(true);  

// // ARROW FUNCTION
// const logDouble = (number) => console.log(number * 2);
// logDouble(20);

// //in javascript non esistono funzioni void, 
// // se non ritornano niente ritornano undefined
// // funzioni impure

// function sum(number1, number2) {
//     // if (!number1) {
//     //     number1 = 0;
//     // }
//     // if (!number2) {
//     //     number2 = 0;
//     // }
//     const sum = number1 + number2;
//     return sum;
// }

// const sumArrow = (n1, n2) => n1 + n2;
// // è possibile avere valori di default direttamente nei parametri
// // const sumArrow = (n1 = 0, n2 = 0) => n1 + n2;

// // la freccetta può fungere da return se tutto sulla stessa riga
// // altrimenti con le graffe è obbligatorio usare return
// const sumArrow2 = (n1, n2) => {
//     const sum = n1 + n2;
//     return sum;
// }

// console.log(sum(10, 8));

// const result = sum(20, 12);
// console.log(result);

// // se si inseriscono più parametri di quanti la funzione accetta,
// // javascript li ignora
// const result2 = sum(20, 30, 60, 140);
// console.log(result2)

// // se uno dei parametri non è definito, chiaramente lo legge come undefined
// // in questo caso 11 + undefined = NaN 
// const result3 = sum(11);
// console.log(result3);

// CODEWARS 
// function greet(name){
//     console.log('Hello ' + name + ' how are you doing today?')
//   }
// greet('pippo');

// function greet(name){
//     myString = 'Hello, ' + name + ' how are you doing today?'
//     return(myString)
// }
// greet('Ryan');

//pazzoinculo
// function greet(name) {
//     if ((!(NaN !== NaN)) ? false : true / (Math.sin(90 * Math.PI / 180))) {
//       const 山 = '010101h01H1010h1010'
//       const 人 = '0e1r0010100e010101001010'
//       const 口 = '0l101l0101111000001010100010010'
//       const 刀 = 'dl001l1011010101011010111100010101'
//       const 目 = '1d000y10100101101011111100001011110010110101111000000010010101'
//       const 日 = '01101o11110001001010100010110101111000011010111100010010000100010'
//       const 女 = 'o00a1d10101000101001011010111100010010101010100010100100010010101010100101'
//       const 鳥 = '0t010o01010111100001010010110101111000100101010100010111110001010101001010010'
//       const 子 = 'y0101g00101111111101111000100101010010111100010011101010100010100101101011110001010'
//       const 木 = '10101o001011111111010111100010010101010001010010110111101111000101010111100000101000101001011'
//       const 水 = 'o010100101011101010111001000101001010111010101110010001010010101110101011101010111100010010101010100101001'
//       const 月 = 'wu01011101010111001010110101010101000101001010111010101110010101101010101010001010010101110101011100101011101'
//       const 沐 = '1010101010010101010101010101010101010101 doing 0101010101010101010101010100101010110010101010101010101011010101010 '
//       const thisIsSupposedToBeTheSpaceCharButSadlyJavaScriptDoesntAllowMeToNameMyVariableAsSuchSorryGuysGottaBreakThePatternHere = ' '
//       const thisIsSupposedToBeTheCommaCharButSadlyJavaScriptDoesntAllowMeToNameMyVariableAsSuchSorryGuysGottaBreakThePatternHere = ','
//       const thisIsSupposedToBeTheQuestionMarkSignButSadlyJavaScriptDoesntAllowMeToNameMyVariableAsSuchSorryGuysGottaBreakThePatternHere = '?'
      
//       let _a = ''
//       let ____________ = ''
      
//       const _=_a.concat(山.slice(Math.tanh(45)+(Math.max(1, -150, -30, -20, -8, -200))+7)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const ___ =_.concat(人.slice(Math.tanh(45)+(Math.max(1, -150, -30, -20, -8, -200))-1,Math.floor(Math.acos(1)+9+1-4/8-8+Math.cos(7))))
//       const _____=___.concat(口.slice(Math.floor(Math.trunc(3**2-2-1+Math.acos(1)+9-4+Math.cos(7)-1479+Math.LOG10E+2+Math.LN2-32+7+3+999+-11+Math.SQRT2+15-0.4+488)))[[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1]])
//       const _______=_____.concat(口.slice(Math.floor(Math.trunc(3**2-2-1+Math.acos(1)+9-4+Math.cos(7)-1479+Math.LOG10E+2+Math.LN2-32+7+3+999+-11+Math.SQRT2+15-0.4+488)))[[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1]])
//       const _________=_______.concat(木.slice(5)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const __________=_________.concat(thisIsSupposedToBeTheCommaCharButSadlyJavaScriptDoesntAllowMeToNameMyVariableAsSuchSorryGuysGottaBreakThePatternHere)
//       const ___________=__________.concat(thisIsSupposedToBeTheSpaceCharButSadlyJavaScriptDoesntAllowMeToNameMyVariableAsSuchSorryGuysGottaBreakThePatternHere)
//       const _____________ = ____________.concat(山.slice(Math.tanh(45)+(Math.max(1, -150, -30, -20, -8, -200))+4)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const ______________ = _____________.concat(日.slice(Math.floor(Math.trunc(3**2-2-1+Math.acos(1)+9-4+Math.cos(7)-1479+Math.LOG10E+2+Math.LN2-32+7+3+999+-11+Math.SQRT2+15-0.4+488)))[0])
//       const _______________ = ______________.concat(月.slice(Math.floor(Math.acos(1)+9+1-4/8-8+Math.cos(7))-1-1)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const ________________ = _______________.concat(thisIsSupposedToBeTheSpaceCharButSadlyJavaScriptDoesntAllowMeToNameMyVariableAsSuchSorryGuysGottaBreakThePatternHere)
//       const _________________ = ________________.concat(女.slice(Math.floor(Math.trunc(3**2-2-1+Math.acos(1)+9-4+Math.cos(7)-1479+Math.LOG10E+2+Math.LN2-32+7+3+999+-11+Math.SQRT2+15-0.4+488))-2)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const __________________= _________________.concat(人.slice(Math.floor(Math.trunc(3**2-2-1+Math.acos(1)+9-4+Math.cos(7)-1479+Math.LOG10E+2+Math.LN2-32+7+3+999+-11+Math.SQRT2+15-0.4+488))-2)[Math.trunc(000+0)])
//       const ___________________=__________________.concat(人.slice(Math.tanh(45)+(Math.max(1, -150, -30, -20, -8, -200))-1,Math.floor(Math.acos(1)+9+1-4/8-8+Math.cos(7))))
//       const ____________________=___________________.concat(thisIsSupposedToBeTheSpaceCharButSadlyJavaScriptDoesntAllowMeToNameMyVariableAsSuchSorryGuysGottaBreakThePatternHere)
//       const _____________________=____________________.concat(子.slice(Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1)[[[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1]]])
//       const ______________________=_____________________.concat(木.slice(5)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const _______________________=______________________.concat(月.slice(Math.floor(Math.acos(1)+9+1+1-4/8-8+Math.cos(7))-1-1)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const ________________________=_______________________.concat(沐.slice((Math.tanh(45) + (Math.min(-47, 150, 30, 20, 8, 200)) + 86),Math.trunc(3**2-2+1514-1+Math.acos(1)+9-4+Math.cos(7)-1479+Math.LOG10E)))
//       const _________________________=________________________.concat(鳥.slice(Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))+0)[1+2+3-6])
//       const __________________________=_________________________.concat(水.slice(Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const ___________________________=__________________________.concat(目.slice(Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7)))[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const _____________________________=___________________________.concat(女.slice(Math.floor(Math.trunc(3**2-2-1+Math.acos(1)+9-4+Math.cos(7)-1479+Math.LOG10E+2+Math.LN2-32+7+3+999+-11+Math.SQRT2+15-0.4+488))-2)[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1])
//       const ______________________________=_____________________________.concat(子.slice(Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1)[[[Math.floor(Math.acos(1)+9-4/8-8+Math.cos(7))-1]]])
//       const _______________________________=______________________________.concat(thisIsSupposedToBeTheQuestionMarkSignButSadlyJavaScriptDoesntAllowMeToNameMyVariableAsSuchSorryGuysGottaBreakThePatternHere)
      
//       return `${__________} ${name} ${_______________________________}`}}

// SCOPE zone vive e zone morte
// è lo spazio compreso tra le due graffe

// se non è dentro nessuno scope, vive nello scope globale 
// e la funzione lo va a pescare lungo tutto il file
const hello = 'ciao';

// function sayHelloTo(name) {
//     const helloString = hello + ' ' + name + '!'
//     console.log(helloString)
// }

// function sayHelloTo(name) {
//     function createHelloString(name) {
//         const helloString = hello + ' ' + name + '!';
//         return helloString;
//     }
//     // console.log(helloString);
//     const newHello = createHelloString(name);
//     console.log(newHello)
// }

// sayHelloTo('pippo');
// //non posso chiamare fuori una variabile che sta dentro a uno
// // scope locale - ergo la mamma non entra nella stanza del figlio
// // console.log(helloString);
// // dunque se una variabile è dentro {} vive solo lì, fuori non esiste
// console.log(hello);

// const sayHelloTo3(name) {
//     function createHelloString(name, helloS){
//         const helloString = helloS + ' ' + name + '!';
//         return helloString;
//     }
// // se dichiarata, ha la priorità la variabile interna allo scope, 
// // anziché quella globale che porta lo stesso nome
// // questa pratica di chiama shadowing e javascript lo permette
//     const hello = 'hello';
//     const newHello = createHelloString(name, hello);
//     console.log(newHello);
// }

// sayHelloTo3('laura')

// CLOJURE
// function createCallTwice(name) {
//     const call = name + ',' + name + '!';
//     // const callFunction = () => console.log(call)
//     const callFunction = function () {
//         console.log(call);
//     }
//     return callFunction;
// }

// const callTwice = createCallTwice('andrea');
// callTwice();

// function createMultiplicator(number) {
//     const multiplicatorFunc = function (numberToMultiply) {
//         return numberToMultiply * number;
//     }
//     return multiplicatorFunc;
// }

// const multiX2 = createMultiplicator(2);
// const multiX3 = createMultiplicator(3);

// console.log(multiX2(10));
// console.log(multiX3(10));

// function createCounter() {
//     let counter = 0;
//     const incrementFunc = function() {
//         counter++;
//         return counter;
//     }
//     return incrementFunc;
// }

// const increment = createCounter();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());


// RICORSIVA

function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
       return number * factorial(number - 1);
    }
}

console.log(factorial(5));
console.log(factorial(6));
