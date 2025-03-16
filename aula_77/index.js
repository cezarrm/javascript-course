/* 705 484 450-52

7x  0x  5x  4x  8x  4x  4x  5x  0x 
10  9   8   7   6   5   4   3   2
70  0  40  28  48  20  16  15   0

11 - (237 % 11) = 5 (Primeiro dígito)

Se o número do dígito for maior que 9, consderar 0;

Adiciona o novo número no final da string.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2     
70  0  40  28  48  20  16  15   0   10 = 284

11 - (284 % 11) = 2 (Segundo digito)

*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = convertArray(Array.from(cpfLimpo));
let novaArray = testCpf(cpfArray)



function testCpf (cpf) {

    let arreyInit = splitArray(cpf, 9)
    let arrayMulti = multiplicaArray(arreyInit)
    let soma = somaArray(arrayMulti);
    let digit = createDigit(soma);
    let arreyParcial = adicionaDigito(digit, arreyInit);
    let arreyFinal = criaSegundoDigito(arreyParcial);
    
    return arreyFinal
      

}


function validaCPF(cpf, cpf2) {
    if (cpf.join('') === cpf2.join('')) {
        return 'CPF Válido';
    } else {
        return 'CPF Inválido';
    }
}


function criaSegundoDigito (array) {

    let arrayMulti = multiplicaArray(array)
    let soma = somaArray(arrayMulti);
    let digit = createDigit(soma);
    let novaArray = adicionaDigito(digit, array);

return novaArray;

}


function createDigit (valor) {

    let digit = 11 - (valor % 11);
    return digit;

}

function splitArray (array, tamanho) {
    arraySliced = array.slice(0,  tamanho);
    return arraySliced;
}

function somaArray(array) {
    let soma = 0;
    for (let i of array) {

        soma += i;
        
    }

    return soma;

}

function multiplicaArray(array) {

    let multiplicador = array.length + 1;
    let arrayMultiplicada = [];
   
        for (let i = 0; i < array.length; i++) {
        let valor = Number(array[i]);
        valor = valor * (multiplicador);   
        arrayMultiplicada.push(valor)
        multiplicador--
        }
    
         
       
      return arrayMultiplicada;
}



function adicionaDigito(valor, array) {
   
    if(valor >= 10) {
       
        array.push(0)
 
    } else {

        array.push(valor);

    }

    array = convertArray(array);

    return array;

}



function convertArray(array) {
   
    let arrayNumber = [];
    
    for(let i in array) {
        let valor = Number(array[i]);
        arrayNumber.push(valor);
        
    }

    return arrayNumber;

}



console.log(validaCPF(cpfArray, novaArray))