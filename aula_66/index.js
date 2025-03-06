//map altera valores do array;
/*                     
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//dobrar todos os valores

const doubleNumber = numeros.map(value => value * 2);  //retorna o valor com valor diferente


console.log(doubleNumber);

*/

//retorne apenas uma string com nome da pessoa
//

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
  ]; 

  const namePeople = pessoas.map(object => object.nome);
  const agePeople = pessoas.map(object => ({ idade: object.idade })); //poderia deletar a chave nome delete object.nome; e return obj;
  

  const comID = pessoas.map(function (obj, indice){
    const newObj = {...obj }
    newObj.id = indice;
    return newObj;

  });

  console.log(pessoas)
  console.log(comID)
//as alterações são feitas nos objetos originais, se vc n quer, devesse criar um novo objeto usando const newObj = {... obj}

