var readline = require('readline')
var fatorial = require('./modulo/fatorial')


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

entradaDeDados.question('Digite o valor: ', function(valorFinal){
    let valorUsuario = valorFinal
    fatorial.calculoFatorial(valorUsuario)-

    entradaDeDados.close()
})
