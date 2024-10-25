const args = process.argv.slice(2);

const restar = require('./restar');
const multiplicacion = require('./multiplicar');
const division = require('./division');
const suma = require('./suma');

if (args.length < 3) {  // Verificar que haya al menos 3 argumentos
    console.log("Por favor, ingrese 2 valores numéricos y un operador.");
    console.log("Ej: 1 2 +");
    process.exit(1);  // Llamada correcta a process.exit()
}

// Convertir los primeros dos argumentos a números
const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const operador = args[2];

let resultado;

switch (operador) {
    case 'sumar':
        resultado = suma(a, b);
        break;
    case 'restar':
        resultado = restar(a, b);
        break;
    case 'mult':
        resultado = multiplicacion(a, b);
        break;
    case 'div':
        if (b === 0) {
            console.log("Error: No se puede dividir por cero.");
            process.exit(1);
        }
        resultado = division(a, b);
        break;
    default:
        console.log("Operador no válido. Use sumar, restar, mult o div");
        process.exit(1);
}

console.log(resultado);