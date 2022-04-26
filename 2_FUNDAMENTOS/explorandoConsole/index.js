const x = 10;
const y = "João"
const z = [1, 2]

console.log(x, y, z)

//contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)


//variavel entre string 
//posso chamar qualquer tipo de valor, int, boolean, ou string mesmo. ele vai ser convertido para string de qualquer forma.
console.log("O nome é %s, ele é programador", y)



//limpar console
setTimeout(() =>{
    console.clear()
}, 2000)