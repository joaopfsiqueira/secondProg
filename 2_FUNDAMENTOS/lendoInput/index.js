//readline é uma função nativa do node. Dentro dela tem um metodo chamado CreateInterface, que vai criar uma interface de input e output.
//a variavel process é sempre um valor do terminal.
const readline = require('readline').createInterface({
    //stdin é o input do terminal. IN, de dentro, é o que a pessoa digita. de stdOUT de fora.
    input: process.stdin,
    output: process.stdout,
});


readline.question("Qual a sua linguagem preferida?", (language) => {
    console.log(`Sua linguagem preferida é ${language}`);
    readline.close();
})

