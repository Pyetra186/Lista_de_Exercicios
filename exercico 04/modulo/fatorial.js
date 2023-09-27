/********************************************************************
 * Objeto:  Calcular o Fatorial de um número fornecido pelo usuário
 * Data: 27/09/2023
 * Autor: Pietra Volpato
 * Versão: 1.0
 ********************************************************************/

const calculoFatorial = function (valor) {


    let valorUsuario = (valor)
    let cont = 1
    let resultado
    let calcular = valor

    if(valorUsuario == '' )
      console.log('- Erro: Todas os valores devem ser preenchidos')
    else if(isNaN(valorUsuario))
      console.log('O valor deve ser preenchido apenas com números')
    else if (Number(valorUsuario) == 0)
        console.log('ERRO: Não existe fatorial de 0')
    else if (Number(valorUsuario) == 1)
        console.log('ERRO: Você deve inserir um valor maior que 1')
    else if (Number(valorUsuario) < 0)
    console.log('ERRO: Você deve inserir um valor positivo')

    else {
        while( cont = valorUsuario) {
            resultado = resultado * (valor - contador)
            calculo += `${valorUsuario-cont}`
            cont++
           }
           console.log('Fatorial de '+ valorUsuario +':' + calcular + '=' + resultado)
    }

}
module.exports = {
    calculoFatorial
}