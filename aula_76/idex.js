// herança
// ex. sistema dono de ecommerce: vende -> camisa e caneca 
// primeiro abstrai em uma coisa só e depois especializo o programa para reuitilizar o código;
// -> produto

//camiseta por ter cor, caneca pode ser de plastico (material)
// nos dois quero poder aumentar o valor e dar desconto;

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;

}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;

}

function Camiseta(nome, preco, cor) {
    //tenho que fazer com que o codigo de Produto para ser executado aqui dentro; 
    Produto.call(this, nome, preco) //linka as propriedades do Produto a Camiseta, além de que, define o this vai ser o objeto criado usado essa função construtura
    this.cor = cor;

}
// antes existia camiseta.prototype.constructor = camiseta;

Camiseta.prototype = Object.create(Produto.prototype); //criando objeto vazio e setanto o prototpe e o prototype da Camiseta vai ser o mesmo de produto (herda os métodos mas não as propriedas)
Camiseta.prototype.constructor = Camiseta; //define o constructor novamente para o construtor real do objeto;


Camiseta.prototype.aumento = function (percentual) { //reescreve com % no Camisa.Protype
    this.preco = this.preco + (this.preco * (percentual / 100))


}


function Caneca (nome, preco, material, estoque){

    Produto.call(this, nome, preco); //defino this como o objeto a ser criado;
    this.material = material; //adiciono nova propriedade
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get : function () {
            return estoque;
        },

        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }

    })
}

Caneca.prototype = Object.create(Produto.prototype) //crio um novo objeto herdando os metódos de Produto;
Caneca.prototype.constructor = Caneca.prototype //redefino o __proto__ de Caneca 

Caneca.prototype.aumento = function (porcentagem) {

    this.preco = this.preco + (this.preco * (porcentagem / 100))

}


const produto = new Produto ('Generico', 10)
const camiseta = new Camiseta('Regata', 7.6,'Preto')
const caneca = new Caneca('Caneca Naruto', 10.50, 'Porcelana', 200)

caneca.estoque = 100; //aqui getter

console.log(caneca.estoque); //aqui setter
console.log(camiseta);
console.log(produto);