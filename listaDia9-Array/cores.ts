import leia = require("readline-sync");
const cores: Array<string> = new Array<string>();

    console.log('\nDigite 5 cores');

for (let i = 0; i < 5; i++) {
    const cor = leia.question(`${i+1}ª cor: `);
    cores.push(cor);
}

    console.log('\nListar todas as cores:');
        for (const cor of cores) {
            console.log(cor);
        }
    console.log(`\nOrdenar as cores:`);
        cores.sort();
        for (const cor of cores) {
            console.log(cor);
        }
console.log();