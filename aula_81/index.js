//Classes -> mesma coisa que Constructor function, só um jeito novo para escrever;

class Pessoa {

    //método especial sempre que é executado uma classe, ele pode ser executado, mas não é necessário
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { //métodos dentro da classe;
        console.log(`${this.nome} está falando.`);

    }

    comer() {

        console.log(`${this.nome} está comendo.`);

    }

    beber(){

        console.log(`${this.nome} está bebendo.`);

    }


};


function Pessoa2 (nome, sobrenome) {

    this.nome = nome;
    this.sobrenome = sobrenome;


}

Pessoa2.prototype.falar = function () {

    console.log(`${this.nome} está falando.`);

}

//instanciar é criar um objeto a partir de uma classe (classe é um molde assim como constructor function);
const p1 = new Pessoa('Luiz','Miranda');
const p2 = new Pessoa2('Cezar','Miranda')

p2.falar()