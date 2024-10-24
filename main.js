const args = process.argv.slice(2)

if (args.length < 2) {
    console.log("Por favor, ingrese 2 valores numericos."); 
    console.log("Por favor, la cuenta que quiere realizar."); 
    process.exit;
} 

const a = args[0]
const b = args[1]
const operador = args[2];

let resultado;
switch (operador) {
    case '+':
        resultado = suma(a, b);
        break;
    case '-':
        resultado = restar([a, b]);
        break;
    case '*':
        resultado = multiplicacion(a, b);
        break;
    case '/':
        resultado = division(a, b);
        break;
    default:
        console.log("Operador no válido. Use +, -, * o /.");
        process.exit(1);
}

console.log(`Resultado: ${a} ${operador} ${b} = ${resultado}`);

// const sumar = require('./sumar');
const restar = require('./restar');
// const multiplicar = require('./multiplicar');
// const dividir = require('./dividir');

//console.log(sumar(2, 3)); // 5
console.log(restar()); // 3
//console.log(multiplicar(4, 3)); // 12
//console.log(dividir(10, 2)); // 5
