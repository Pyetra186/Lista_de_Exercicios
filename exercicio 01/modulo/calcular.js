/*********************************************************************
 * Obetivo: Gerar um sistema que faça o cálculo do IMC de uma pessoa
 * Data: 13/09/2023
 * Autor: Pietra Volpato
 * Versão: 1.0
 ********************************************************************/
const gerarImc = function(peso, altura){


    // recebendo os argumentos da função
    let peso;
    let altura;
    let resultado;
    let valorFinal;
    let status = false;
    
    
      valorFinal = peso / (altura * altura);
    
    
      if(altura == '' || peso == '')
      console.log('Error: Todas as notas devem ser preenchidas')
      else if(isNaN(altura.replace(',','.')) || isNaN(peso.replace(',','.')))
      console.log('Error: Só é permitido valores numericos')
      else{
    
    
        valorFinal = Number(peso.replace(',','.')) / (Number(altura.replace(',','.')) * Number(altura.replace(',','.')))
    
    
      if (valorFinal < 18.5){
        resultado = 'abaixo do peso'
        console.log(`Seu IMC  é ${valorFinal.toFixed(2)}, você está ${resultado}`)
        status = true
    
    
      }else if(valorFinal > 18.5 && valorFinal < 24.9){
        resultado = ' peso ideal'
        console.log(`Seu IMC  é ${valorFinal.toFixed(2)}, você está ${resultado}`)
        status = true
    
    
      }else if(valorFinal > 25 && valorFinal < 29.9 ){
        resultado = ' acima do peseo (sobrepeso)'
        console.log(`Seu IMC  é ${valorFinal.toFixed(2)}, você está ${resultado}`)
        status = true
    
    
      }else if(valorFinal > 30 && valorFinal < 34.9){
        resultado = ' obesidade I'
        console.log(`Seu IMC  é ${valorFinal.toFixed(2)}, você está ${resultado}`)
        status = true
    
    
      }else if(valorFinal > 35 && valorFinal < 39.9){
        resultado = ' obesidade II'
        console.log(`Seu IMC  é ${valorFinal.toFixed(2)}, você está ${resultado}`)
        status = true
    
    
      }else if(valorFinal > 40 ){
        resultado = ' obesidade III'
        console.log(`Seu IMC  é ${valorFinal.toFixed(2)}, você está ${resultado}`)
        status = true
        }
        return status
      }
    
    
    }
    module.exports = {
        gerarImc
    }
    