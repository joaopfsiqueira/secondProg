//o chalk basicamente serve para facilitar a visualização do console.
const chalk = require('chalk');


const nota = 7


// o bacana é digitar chalk. e apertar ctrl espaço para ver todas as opções de função que o chalk tem.
if(nota >= 6) {
    console.log(chalk.green.bold('Parabéns! Você está aprovado!'))
} else {
console.log(chalk.bgRed.black('Sinto muito! Você está reprovado!'))
}