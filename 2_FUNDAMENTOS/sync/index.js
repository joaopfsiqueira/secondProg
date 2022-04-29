// em node, temos duas opções ao executar método. Sync e async.
// Forma sincrona: o código espera ser totalmente executado para prosseguir.
// Forma Assincrona: o código não espera ser totalmente executado para prosseguir. 

const fs = require('fs');

console.log("Inicio")


//nesse código abaixo, ele diz que, para o código CONTINUAR, ele depende que o arquivo seja escrito antes.
fs.writeFileSync('arquivo.txt', "Escrevendo no arquivo SYNC")

console.log("Fim.")