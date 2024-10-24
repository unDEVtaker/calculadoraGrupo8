const args = process.argv.slice(2)

if (args.length < 2) {
    console.log("Por favor, ingrese 2 valores numericos."); 
    console.log("Por favor, la cuenta que quiere realizar."); 
    process.exit;
} 

const a = args[0]
const b = args[1]
const operador = args[2];

// switch (operador) {

//     case "+":
//         result = 
// }




// const sumar = require('./sumar');
// const restar = require('./restar');
// const multiplicar = require('./multiplicar');
// const dividir = require('./dividir');

//  console.log(sumar(2, 3)); // 5
//  console.log(restar(5, 2)); // 3
//  console.log(multiplicar(4, 3)); // 12
//  console.log(dividir(10, 2)); // 5

