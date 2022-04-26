const minimist = require('minimist');
//o minimist basicamente deixa melhor visivel os args dentro de um terminal.
//não só isso como também deixa mais fácil de pegar o valor dentro do terminal. a diferença é que não precisa fazer um split (COMO EM "LER_ARGUMENTOS")

//comando: node index.js --nome=siqueira --profissao=developer(diferença no comando: precisa do --antes do nome)


//pegando argumentos à partir do segundo elemento para frente, ou certo, depois do index.js e colocando dentro de um array
const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome']
const profissao = args['profissao']

console.log(nome, profissao)