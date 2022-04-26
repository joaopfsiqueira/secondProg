const inquirer = require('inquirer')

//inquirer faz a mesma coisa que o readLine, só que com bem mais funções.
//prompt é o que faz aparecer as perguntas, podendo colocar várias dentro de um único array.
//cada pergunta deve ser feita dentro de objeto.
inquirer.prompt([{
    name: 'Pergunta1',
    message: 'Qual a primeira nota?'
}, {
    name: 'Pergunta2',
    message: 'Qual a segunda nota?'
}])
//usando promise ao final do inquirer, onde vai receber a resposta (answer mas pode ser qualquer nome)
.then((answers) => {
    console.log(answers)
    const media = ((parseInt(answers.Pergunta1) + parseInt(answers.Pergunta2)) / 2)
    console.log(`Sua média é ${media}`)
}).catch((err) => console.log(err))