/* //new object -> tem Object.prototype
const objectA = {
    keyA: 'A'
    //vem numa chave __proto__: Object.prototype
}; 

const objectB = {

    KeyB: 'B'
};

const objectC = new Object(); 
      objectC.KeyC = 'C';

Object.setPrototypeOf(objectB, objectA); //faz o __proto__ do objb ser ou seja vai ser __proto__: objectA
Object.setPrototypeOf(objectC, objectB);

console.log(objectC.KeyC) //consegue acessar os elementos

//não é recomendado mexer __proto__

//Object.getPrototypeOf(objA) - getter
//Object.setPrototypeOF(objA) - setter

*/



function Produto (nome, preco) {

    this.nome = nome;
    this.preco = preco;
    
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - ((percentual / 100) * this.preco);
}

Produto.prototype.aumenta = function (percentual) {
    this.preco = this.preco + ((percentual / 100) * this.preco);
}


const productA = new Produto('Camiseta', 50);
//productA.desconto(25);
//productA.aumenta(100)

const productB = {
    nome: 'Caneca',
    preco: 15
    
}

Object.setPrototypeOf(productB, Produto.prototype)

productA.aumenta(10)
productB.aumenta(10)


const productC = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },

});


productC.aumenta(10)

console.log(productC)