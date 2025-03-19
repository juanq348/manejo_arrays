const prompt = require('prompt-sync')();

let personas = [];
let cantidad = parseInt(prompt("Ingrese el número de personas a registrar: "));

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt(`Ingrese el nombre de la persona ${i + 1}: `);
    let edad = parseInt(prompt("Ingrese la edad: "));
    let nota = parseFloat(prompt("Ingrese la nota: "));
    personas.push({ nombre, edad, nota });
}

console.log("\nLista de personas ingresadas:");
console.table(personas);

personas.sort((a, b) => b.nota - a.nota);
console.log("\nLista ordenada por nota (mayor a menor):");
console.table(personas);
