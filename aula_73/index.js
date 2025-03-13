//objetos são valores passados por referência;
//como copiar objetos

const produto = {nome: 'Produto', preco: '1.8'};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,    
    value: 'Qualquer outra coisa'
});

produto.preco = 'Outra coisa';
delete produto.preco;
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(produto)


