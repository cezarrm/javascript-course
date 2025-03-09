const produtos = [   
{ nome: 'Caixa', preco: 69}, 
{ nome: 'Bolacha', preco: 60},
{ nome: 'Bola', preco: 90},
{ nome: 'Porta', preco: 550},
{ nome: 'Chocolate', preco: 140},
{ nome: 'Copo', preco: 320},

]

const moreExpensive = produtos.filter(product => product.preco > 100) 



console.log(moreExpensive)