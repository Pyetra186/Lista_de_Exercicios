var readline = require('readline');
var calculo = require('./modulo/calcular.js');


 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })


 entradaDados.question('Qual o seu peso? ', function(peso){
        entradaDados.question('Qual a sua altura? ', function(altura){
           
            valorFinal = calculo.gerarImc(peso, altura)
                if(valorFinal)
                console.log(valorFinal)
        })
 })
