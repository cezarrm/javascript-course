//prototypes - base para POO
// Constrtura -> molde (classe)
/*function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//instância = ação de gerar novos objetos;
const pessoa1 = new Pessoa ('Cezar', 'Miranda'); //Pessoa = função construtora
const pessoa2 = new Pessoa ('Andressa', 'Duim');//Pessoa = Função construtura

console.dir(pessoa1)
console.dir(pessoa2) */

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
 //   this.nomeCompleto = () => 'ORIGINAL ' + this.nome + ' ' + this.sobrenome; //todo objeto tem uma referencia interna para um prototipo (_proto_), vem da propriedade prototype
    //primeiro o motor do JS vai procurar dentro do corpo do objeto, para depois buscar no prototype;
}

Pessoa.prototype.nomeCompleto = function () {

    return this.nome + ' ' + this.sobrenome;

}


const pessoa1 = new Pessoa ('Cezar', 'Miranda'); //Pessoa = função construtora
const pessoa2 = new Pessoa ('Maria','Miranda'); 

//quando criar um objeto dentro da função construtura, todos objetos derivados dela, vão ter.
//propriedade _proto_ está no 'pai' do objeto; não vai ser criado em todos os objetos;
//javascript ja linka automaticamente pessoa.prototype


console.log(pessoa1.nomeCompleto())


