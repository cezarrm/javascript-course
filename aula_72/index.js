function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

   
    let estoquePrivado = estoque;

     Object.defineProperty(this, 'estoque', { 
     enumerable: true,    
     configurable: true,  
     get: function() {
    //pegar o valor que está no momento e mostra, apenas retorn
        return estoquePrivado;
     },
     set: function (valor) {
        if ( typeof valor !== 'number'){
            throw new TypeError('Mensagem');
           
        }
        estoquePrivado = valor;
     }   
    
    });

    }

    function criaProduto (nome) {

        return {
            get nome() { //obtem valor
                return nome;
            },
            set nome (valor){ //altera valor
                valor = valor.replace('coisa', '')
                nome = valor;
            }

        }


    }

    const p2 = criaProduto('Camiseta');
    p2.nome = 'Qualquer coisa'
    console.log(p2.nome);
 
    /*
 const p1 = new Produto ('Camiseta', 20, 3);

 p1.estoque = '500';
 console.log(p1.estoque);

 //getter -> método da função simular que é uma propriedade, maneira que tenho de proteger minha propriedade
 //setter
 */