/**********************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 20/09/2023
 * Autor: Pietra Volpato
 * Versão: 1.0
 **********************************************************************/


const gerarTabuada = function (valorInicialTabuada, valorFinalTabuada, contInicial, contFinal){


    let tabuadaInicial = valorInicialTabuada;
    let tabuadaFinal = valorFinalTabuada;
    let contadorInicial = contInicial;
    let contadorFinal = contFinal;




    let resultado;
    let status = false


        if(tabuadaInicial == '' || tabuadaFinal == '' || contadorInicial == '' || contadorFinal == '')
        console.log('>> ERRO: É obrigatória a entrada de todos os valores')
    else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contadorInicial) || isNaN(contadorFinal))
        console.log('>. ERRO: Os valores inseridos devem ser números inteiros.')
    else if(tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100)
        console.log('>> ERRO: Os valores inseridos devem estar entre 2')
    else if(contadorInicial < 1 || contadorInicial > 50 || contadorFinal < 1 || contadorFinal > 50)
        console.log('>> ERRO: Os valores a serem calculados só podem estar entre 1 e 50')  
    else{




        if (tabuadaInicial > tabuadaFinal) {
            tabuadaInicial = valorFinalTabuada;
            tabuadaFinal = valorInicialTabuada
        }


        if (contadorInicial > contadorFinal){
            contadorInicial = contFinal
            contadorFinal = contInicial
        }


        for( ; tabuadaInicial <= tabuadaFinal; tabuadaInicial++ ){
            console.log('Tabuada do [' + tabuadaInicial + ']')
           
            for(; contadorInicial <= contadorFinal; contadorInicial++){
                resultado = tabuadaInicial * contadorInicial
                console.log(`${tabuadaInicial} x ${contadorInicial} = ${resultado}`)
            }


            contadorInicial = contInicial
            status = true
        }


        return status


    }
   
}


module.exports = {
    gerarTabuada
}
