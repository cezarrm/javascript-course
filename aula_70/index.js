// revisando objetos;

//literal '' "" `` 
/*
const pessoa = {
    
    nome: 'luiz',
    sobrenome: 'otavio',
    
};

const chave = 'sobrenome';

console.log(pessoa[chave]);//acessando a chave com anotação de colchetes (servidore,etc)
console.log(pessoa['sobrenome']);


const pessoa1 = new Object(); //construtor

pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 30;

//delete pessoa1.nome; //apaga chave nome; 
//metodo são funlões dentro do objeto que executam açoes.
// vantagem: ter acesso as coisas do objeto dentro dessa função;

pessoa1.falarNome = function () {

    console.log(`${this.nome} está falando seu nome.`); //this refere ao objeto pessoa1

}

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;


}

for (let chave in pessoa1) { //vai ver todas as chaves

    console.log(pessoa1[chave])

}
*/

//objeto que precisa ser criado frequentemente (exemplo: cliente loja);

//criar molde que cria os objetos; factory functions / constructor functions (padrões de projeto) / classes (sintaxe sugar)

/*function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
       
        get nomeCompleto() { //vai simular um atributo da classe
            return  `${this.nome} ${this.sobrenome}`;
          
        }
        //getter and setter
    }



}
const p1 = criaPessoa('Cezar', 'Miranda');

console.log(p1.nomeCompleto);*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this) //congela objeto
}; 
// palavra new cria objeto vazio {}, atrela a palavra this dentro dessa função ao objeto; e retorna o this;

const p1 = new Pessoa ('Cezar','Miranda')
//Object.freeze(p1); //travo um objeto aqui; não vai altear o objeto

const p2 = new Pessoa ('Maria','Joana')
//varialvel aponta pra endereço -> endereço mémória aponta para  -> valor
p1.nome = 'Outra coisa' //não altera o valor da consta, mas sim o valor do valor da const;
console.log(p1)
console.log(p2)


