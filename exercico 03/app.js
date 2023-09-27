var readline = require('readline');
var tabuada = require ('./modulo/calculos');


var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Digite o valor da primeira tabuada: ' + function(valorInicialTabuada) {
 
    entradaDados.question('Digite o valor da segunda tabuada: ' + function(valorFinalTabuada){
   
        entradaDados.question('digite o valor que será calculado: ' + function(contadorInicial){


            entradaDados.question('Digite o segundo valor que será calculado: ' + function(contadorFinal){




                tabuada.gerarTabuada(valorInicialTabuada,valorFinalTabuada,contadorInicial,contadorFinal)


                entradaDados.close()


            })
        })
    })
})
