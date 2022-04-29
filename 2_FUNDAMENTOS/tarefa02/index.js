const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([{
    name: 'P1',
    message: 'Qual o seu nome?',
}, {
    name: 'P2',
    message: 'Qual a sua idade?',
}])

.then((answers) => {
    console.log(chalk.bgYellow.black(`Seu nome é ${answers.P1} e sua idade é ${answers.P2}`))
}).catch((err) => console.log(err))