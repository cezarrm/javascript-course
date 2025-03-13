//objetos são valores passados por referência;
//como copiar objetos

const produto = {nome: 'Produto', preco: '1.8', material: 'porcelana'};
//console.log(Object.values(produto)) //pega os valores, não pega as chaves;
//console.log(Object.entries(produto)) //pega os valores e keys, retorna um array maior, com arrays internos

for (let valor of Object.entries(produto)) {

    console.log(valor[0], valor [1]); //cada iteração pega um array com dois objetos; da pra fazer destructor

}

/*

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,    
    value: 'Qualquer outra coisa'
});

produto.preco = 'Outra coisa';
delete produto.preco;
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(produto)


*/

/* 
object.values (retorna valores)
object. entries (retorna chaves e valores em arrays)
object.getOwnPropertyDescripton(o, 'prop); retorna o descritor daquela propriedade dentro do objeto
object.assign(des, any) serve pra copiar um objeto, e vários outros objetos
...(spread)

//javimos

object.keys - retorna chaves
object.freeza - trava objeto completo
object.defineProperties - define propriedades com seus descritores
object.defineProperty - define uma propriedade;

*/