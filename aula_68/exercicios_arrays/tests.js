//create a array with 5 fruits

const frutas = ['Maça','Banana','Abacaxi','Melão','Laranja']


//Exiba a primeira e a última fruta.
console.log(frutas[0],frutas[frutas.length -1]);

//Adicione uma nova fruta no final.
frutas.push('Tomate')

console.log(frutas);

//Remova a primeira fruta.

frutas.splice(0, 1);
console.log(frutas)


