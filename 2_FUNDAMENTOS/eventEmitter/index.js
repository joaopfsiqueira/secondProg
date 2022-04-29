//event emitter se comporta como os eventos do navegador.
//podendo ativar um código em alguins pontos da aplicação.

//precisamos primeiro INSTANCIAR o event emitter
const EventEmitter = require('events')
//depois precisamos INICIALIZAR o event emitter
const eventEmitter = new EventEmitter();

//start é o nome do evento.
eventEmitter.on('start', () => {
    console.log('Iniciando o evento')
})

console.log("Antes")

//o .emit é o que ativa o evento, isso através do nome do evento.
eventEmitter.emit('start')

console.log('Depois')