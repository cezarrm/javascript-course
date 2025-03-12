// travar apenas algumas propriedades do objeto
// defineProperty -> uma propriedade
// defineProperties -> várias de uma vez

function Produto (nome, preco, estoque) {


   // this.estoque = estoque; //variavel estoque n possa ser operada;

    Object.defineProperty(this, 'estoque', { // cria propriedade
    //property descriptor
    enumerable: true,    // permite a exibiçao da chave (for in ou object.keys)
    value: function () {
        return estoque;
    }, //valor
    writable: false, //valor pode alterar o valor da variável?
    configurable: true  //pode apagar a chave? pode reconfigurar a chave? (true permite, false recusa)
    });

    /*Object.defineProperties(this, {
        nome: {
            enumerable: true,    
            value: nome,
            writable: true, 
            configurable: true  

        }, //aqui vai a chave onde vai todas as configurações;
        preco: {
            enumerable: true,    
            value: preco,
            writable: true, 
            configurable: true  

        },
     });

} */


const p1 = new Produto ('Camiseta', 20, 3);
console.log(p1);

for( let chave in p1) {
    console.log(chave);
}
/*p1.estoque = 5000000;

console.log(p1.estoque());*/

/*console.log(Object.keys(p1)) //chaves enumerable, mostra as chaves que estão enumerable;
for(let chave in p1) {
    console.log(chave)

} */

