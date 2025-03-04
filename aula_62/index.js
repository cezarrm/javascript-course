//                0         1       2
//const nomes = ['eduardo','maria','joana'];


//nomes [2] = 'joao';
//console.log(nomes[2])

//delete nomes[2]; //remover um elemento mas os indices não são alterados;

//console.log(nomes[2])

// const nomes = new Array('Eduardo', 'Maria', 'Joana'); //construtor de array


// valor por referencia

//                 0         1       2      3          4
//const nomes = ['eduardo','maria','joana', 'walace', 'rosana'];
//const novo = nomes.slice(1,3) //recorda entr o 1 e 3, o ultimo indice (3) não é incluido

//const novo = nomes.slice(1,-2); //usar numeros negativos, '-1' 'de traz pra frente' no exemplo remove a rosana

//const novo = [...nomes]; //fazendo isso o que é feito em 'novo' não reflete em 'nomes', impede o valor por referência;
//const removido = novo.pop(); //remove elementos do array e retorna o elemento removido
//const removido = novo.shift() //remove o primeiro e desloca todos os outros indices;

//nomes.push('joao'); //adiciona no final
//nomes.unshift('João'); // adiciona no inicio e desloca todos os indices;
//nomes.unshift('Wallace');


//const nome = 'Luiz, Otávio, Miranda'; 
//const nomes = nome.split(', '); //separa pela virgula, ou pelo espaço;

const nomes = [ 'Luiz', 'Otávio', 'Miranda' ]
const nome = nomes.join(' '); //dentro do parenteses vc coloca o elemento que vc quer que seja o separador;
console.log(nome);

//adicionar coisas

//console.log(novo); //nomes perde elemento TAMBÉM

//... rest operator (quando quer pegar o resto)
//... spread operator (quando quer espalhar, pegar os dados e espalhar)
