// em node, temos duas opções ao executar método. Sync e async.
// Forma sincrona: o código espera ser totalmente executado para prosseguir.
// Forma Assincrona: o código não espera ser totalmente executado para prosseguir mas espera a resposta da execução.. 


const fs = require('fs');


console.log("Inicio")

//nesse código abaixo ele não usa SYNC. Ele usa ASYNC. Também colocamos um setTimeOut para que demora a ser executado.
//demonstrando que o código seguinte vai ser rodado de qualquer forma.
fs.writeFile('arquivo.txt', "Escrevendo no arquivo async", function (err) {
    setTimeout(function () {
        console.log("Arquivo criado!")
    }, 3000)
})

console.log("Fim.")

//para testar, basta excluir o arquivo.txt