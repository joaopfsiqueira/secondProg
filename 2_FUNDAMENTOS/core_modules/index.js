const path = require('path');

//dentro do path tem um método chamado extname, que basicamente retorna o nome da extensão do arquivo.
const extension = path.extname("arquivo.php");
const extension2 = path.extname("arquivo.pdf");


console.log("Primeiro arquivo: ", extension);
console.log("Segundo arquivo: ", extension2);