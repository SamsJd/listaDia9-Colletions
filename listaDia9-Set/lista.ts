import leia = require("readline-sync");
const numero: Set<number> = new Set<number>();

    console.log('\nDigite 10 números');

for (let i = 0; i < 10; i++) {
    const lista = leia.questionInt(`${i + 1}º número: `)
    numero.add(lista) 
} 
    const crescente = [...numero].sort((a, b) => a - b);

    console.log(`\nNúmeros listados: `)
    for (let lista of crescente) {
        console.log(lista);
    }