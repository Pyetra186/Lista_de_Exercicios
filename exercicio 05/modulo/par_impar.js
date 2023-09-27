/************************************************************
 * Objetivo: Criar um sistema que gerencie números pares e ímpares
 * Data: 27/09/2023
 * Autor: Pietra VOlpato
 * Versão: 1.0
 ***********************************************************/

const identificarNumeros = function(numeroI, numeroF, escolhaU){

    let inicial = Number(numeroI)
    let final = Number(numeroF)
    let escolha = Number(escolhaU)

    if (inicial == '' || final == '')
    console.log('>>ERRO: É obrigatória a entrada de todos os valores')
    else if(isNaN(inicial) || isNaN(final))
        console.log('>>ERRO: Os valores inseridos devem ser números.')
    else if(inicial > 500 || inicial < 1)
        console.log('>>ERRO: O valor inicial inserido deve estar entre 0 e  500.')
    else if (final > 1000 || final < 10)
        console.log('>>ERRO: Os valor final inserido deve estar entre 10 e 1000.')
    else if (final < inicial)
        console.log('>>ERRO: O valor final não pode ser menor que o inicial.')
    else if (final == inicial)
        console.log('>>ERRO: O valores não podem ser iguais')
    else if(escolha != 1 && escolha != 2 && escolha != 3 )
    console.log('>>ERRO: O valor não corresponde à nenhuma das opções ')
    else{
        
        let contadorPar = 0
        let contadorImpar = 0

        if(escolha ==1 || escolha ==3){
            console.log('Números pares')
            for(;inicial<=final;inicial++){
                if(inicial%2==0){
                    console.log(inicial)
                    contadorPar++
                }
            }
            console.log('Quantidade de pares encontrados: ' +contadorPar)
        }

        if(escolha==2 || escolha==3){        
        inicial = Number(numeroI)
        console.log()
        console.log('Números ímpares')
        for(;inicial<=final;inicial++){
            if(inicial%2!=0){
                console.log(inicial)
                contadorImpar++
            }
        }
        console.log('Quantidade de ímpares encontrados: ' +contadorImpar)
    }

    }
}

module.exports ={
    identificarNumeros
}