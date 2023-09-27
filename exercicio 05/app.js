var readline = require ('readline')
var numeros = require('./modulo/par_impar')


var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



entradaDados.question('Digite o valor inicial: ', function(numeroI){
    let inicial = numeroI

 entradaDados.question('Digite o valor final: ', function(numeroF){
    let final = numeroF

    console.log()
    console.log('1 - Apenas pares, 2 - Apenas ímpares, 3 - Pares e ímpares')
    entradaDados.question('Digite o número que deseja mostrar? ', function(escolhaU){

        let escolha = escolhaU

        numeros.identificarNumeros(inicial, final, escolha)


        entradaDados.close()
    
    })
 })


})