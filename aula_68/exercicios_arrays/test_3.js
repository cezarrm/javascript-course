//3. Contando elementos
//Crie um array com nomes de pessoas.

const nome = ['ana','maria','pedro','julia','analus']

//Conte e exiba quantos nomes começam com a letra "A"

const nomesWithA = nome.filter(value => value.toLowerCase().startsWith('a'));

console.log(`A quantidade de nomes que iniciam com a letra A ${nomesWithA.length === 1 ? 'é' : 'são'} ${nomesWithA.length}`)
