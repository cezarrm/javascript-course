// reduce -> função utiliza para reduzir array a um unico elemento. uma lista de numeros, quero saber o total, reduce vai reduzir a array ao total da soma dos elementos.
/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0 ) acumulador += valor;
     return acumulador
}, 0); //valor inicial para o acumulador, valor que eu quero que inicie, precisa garantir que o primeiro valor seja zero quando for somar apenas os pares.


console.log(soma)*/


const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
  ]; 


  const MaisVelha = pessoas.reduce(function (acumulador, obj) {

    if (acumulador.idade > obj.idade) return acumulador;
    
    

  })

  console.log(MaisVelha)