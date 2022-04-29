//o event loop garante que o código será sequencial.
function a()  {
    console.log("Executando o método a()")
}

function b()  {
    console.log("Executando o método b()")
}

function c() {
    console.log("Executando o método c()")
    a()
    b()
}


c()