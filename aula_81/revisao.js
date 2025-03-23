// Crie uma classe chamada Carro com os seguintes atributos:

// marca

// modelo

// ano

// Depois, instancie um objeto da classe Carro e exiba seus atributos no console.


// class Carro {

//     constructor(marca, modelo, ano) {
//         this.marca = marca;
//         this.modelo = modelo
//         this.ano = ano;
        
//     }

//     exibirInfo() {

//         console.log(`Carro ${this.modelo} desenvolvido pela montadora ${this.marca} no ano de ${this.ano}`)

//     }

// };

// const carro1 = new Carro ('Ford', 'Ká' , '2020');
// const carro2 = new Carro ('Ford', 'Focus' , '2024');

// carro1.exibirInfo();
// carro2.exibirInfo();

// 3. Criando Métodos de Ação
// Crie uma classe ContaBancaria com:

// Atributos: titular, saldo

// Métodos:

// depositar(valor): adiciona o valor ao saldo

// sacar(valor): reduz o saldo se houver saldo suficiente

// exibirSaldo(): exibe o saldo atual

// Crie uma instância da classe e teste seus métodos.

// class ContaBancaria { 

//     constructor (titular, saldo) {
//         this.titular = titular;
//         this.saldo = saldo;
//     }

//     depositar(valor) {
//         this.saldo += valor;
//         console.log(`Valor de R$ ${valor} depositado! Saldo atualizado: R$ ${this.saldo}!`)
//     }

//     sacar (valor){
//         if (valor > this.saldo) return console.log(`Saldo insuficiente! Seu saldo atual é de R$ ${this.saldo}`);
//         this.saldo -= valor;
//         console.log(`Valor de R$ ${valor} sacado! Seu saldo atualizado: R$ ${this.saldo}!`)
//     }

//     exibirSaldo() {
//        console.log(`Seu saldo é R$ ${this.saldo}` )
//     }
// }   

// const conta1 = new ContaBancaria('Cezar', 100);
// console.log(conta1);
// conta1.sacar(500);

// 4. Herdando Classes
// Crie uma classe Animal com:

// Atributo: nome

// Método: emitirSom() (mensagem genérica)

// Depois, crie uma classe Cachorro que herda de Animal e sobrescreva o método emitirSom() para imprimir "Au au!".

// Crie um objeto da classe Cachorro e chame o método emitirSom().

// class Animal {
//     constructor(nome){
//         this.nome = nome;
//     }

//     emitirSom() {
//         console.log('Som genérico!')
//     }    
    
// }


// class Cachorro extends Animal { //herda de animal
//     constructor (nome, raca){
//         super(nome); //chama o constructor da classe pai;
//         this.raca = raca;
//     }

//     emitirSom() { //sobreescreve emitir som! 

//         console.log('Au Au!')
        
//     }
// }

// const dog = new Cachorro ('Rodolfo', 'Vira-lata') 

// dog.emitirSom()
