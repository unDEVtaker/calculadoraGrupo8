const args = process.argv.slice(2); 


if (args.length < 3) {
  console.log("Por favor, ingrese lo que desea hacer y 2 valores numéricos. Ej: `multiplicar 2 5`");
  process.exit(1);
}


const multiplicar = require('./multiplicar');


const operacion = args[0];
const a = args[1]; 
const b = args[2]; 


if (operacion === 'multiplicar') {
  console.log(multiplicar(a, b));
} else {
  console.log(`Operación desconocida: ${operacion}`);
}