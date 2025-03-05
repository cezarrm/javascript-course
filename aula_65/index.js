//filter -> vai sempre retornar um array com a mesma quantidade de elementos ou menos.
// map -> 
// 
// reduce

//retorne os números maiores que 10

/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const maior = [];


const numberFilter = numeros.filter(valor => valor > 50); //recebe 3 coisas automaticamente pelo filter = valor (i), indice que está sendo iterado, valor do array completo;
//verdadeiro quando vc quer que seja embutido no novo array;

console.log(numberFilter)
*/

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: 'Luiz', idade: 62},
  { nome: 'Maria', idade: 23},
  { nome: 'Eduardo', idade: 55},
  { nome: 'Letícia', idade: 19},
  { nome: 'Rosana', idade: 32},
  { nome: 'Wallace', idade: 47},
];

const bigNames = pessoas.filter(value => value.nome.length >= 6);
const oldPeople = pessoas.filter(value => value.idade > 50);
const endWithA = pessoas.filter(value => value.nome.endsWith('a'));


console.log(bigNames, oldPeople, endWithA)


/* método old
for (let i of numeros) {
     if (i > 10) {

       maior.push(i) 

     }
console.log(i)

}

console.log(maior)
*/