/*Exercício:

Crie um objeto filme e use Object.keys(), Object.values() e Object.entries() para explorar suas propriedades. 
const filme = {
    nome: '1982',
    ano: 1992,
    diretor: 'Ted Kotcheff',
    produtora: 'Warner Bros'

};

Object.defineProperty(filme, 'nome', {

    writable: false,
    enumerable: true,
    


})


console.log(Object.keys(filme))// retorna um array de chaves do objeto
console.log(Object.values(filme))// retorna um array com os valores do objeto
console.log(Object.entries(filme))// retorna um array de pares chave-valor



//prototypes
//Crie uma função construtora Pessoa e adicione um método saudar() usando prototype.

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

};

Pessoa.prototype.saudar = function (){

        return `Olá, ${this.nome} ${this.sobrenome}! tudo bem?`;


};

const pessoa1 = new Pessoa('Cezar','Miranda');
console.log(pessoa1.saudar())


//
//Exercício: Crie um objeto animal e use Object.create() para gerar um novo objeto gato que herda de animal.

const Animal = { 

    nome: 'Desconhecido',
    raca: 'Desconhecida',
    idade: 8,

    printTela: function () {

        console.log(`O nome do gato é ${this.nome} de raça ${this.raca} e tem ${this.idade} ${this.idade === 1 ? 'ano' : 'anos'} de idade`)

    }

}

const gato1 = Object.create(Animal) //herda apenas o que quero alterar

gato1.nome = 'Felino';
gato1.idade = 23;

gato1.printTela();
*/ 
/* 
Herança

A herança pode ser feita usando prototype ou class.

Exercício:

Crie uma classe Funcionario e uma classe Gerente que herda de Funcionario.
*/ 

/*
Polimorfismo

Polimorfismo permite que métodos compartilhem o mesmo nome, mas tenham comportamentos diferentes.

Exercício:

Crie uma classe Instrumento com um método tocar() e uma classe Violao que sobrescreve esse método.


function Instrumento (nome) {

    this.nome = nome;

};

Instrumento.prototype.tocar = function (nome) {

    return `O ${this.nome} está tocando`

};

function Violao (nome, musica, artista) {

    Instrumento.call(this, nome); //puxa o que eu quero herdar do object
  
    this.musica = musica;
    this.artista = artista;

}

Violao.prototype = Object.create(Instrumento.prototype) //para herdar corretamente os métodos de instrumento;
Violao.prototype.constructor = Violao // define o proto de Violao

Violao.prototype.tocar = function () {

    return `O ${this.nome} está tocando "${this.musica}" - ${this.artista}`;


}

const violao = new Violao ('Violao','Essa tal liberdade','Só pra contrariar')



console.log(violao.tocar())
*/
/*
Factory Functions + Prototypes

Factory Functions criam objetos sem a necessidade de new.

Exercício:

Crie uma Factory Function criarProduto que retorna um objeto com nome e preço.
*/ 

function criaProduto (nome, preco) {
    return {
    
        nome,
        preco,    
        checarProduto () {
            console.log(`O valor do ${this.nome} é R$ ${this.preco.toFixed(2)}`);
    }
    }
   
}

const p1 = criaProduto('carro', 50000)
p1.checarProduto()
/*
Objeto Map()

O Map permite armazenar pares chave-valor com qualquer tipo de dado.

Exercício:

Crie um Map chamado estoque que armazena produtos e suas quantidades.
 */