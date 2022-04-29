//temos duas formas PRINCIPAIS para gerar ou evidenciar erros em node.js
// SÃO ELAS: throw OU O TRYCATCH
// throw uma forma para encerrar um programa, gerando um novo erros form
// try catch, uma forma de evidenciar algo que deu errado em um bloco de código e exibir o erro.

const x = "10"

//checando se é diferente number 
if (!Number.isInteger(x) ) {
    throw new Error("Valor não é um número inteiro")
}

console.log('Continuando o código...')