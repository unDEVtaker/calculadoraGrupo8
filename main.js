const args = process.argv.slice(2)

if (args.length < 2) {
    console.log("Por favor, ingrese 2 valores numericos. Ej: `2 5`"); 
    process.exit;
} 

const a = args[0]
const b = args[1]

// const sumar = require('./sumar');
const restar = require('./resta');
// const multiplicar = require('./multiplicar');
// const dividir = require('./dividir');

//console.log(sumar(2, 3)); // 5
console.log(restar()); // 3
//console.log(multiplicar(4, 3)); // 12
//console.log(dividir(10, 2)); // 5
