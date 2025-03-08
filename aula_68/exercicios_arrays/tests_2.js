//Crie um array com 6 números.

const numeros = [10, 20, 30, 40, 50, 60];



//Use um loop para somar todos os números.
const soma = numeros.reduce(function (acm, valor) {

    return acm += valor;

},0);

//Exiba o total.

console.log(soma)

