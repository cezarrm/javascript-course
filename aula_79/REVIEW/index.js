/* Revisando Objetos

Objetos são estruturas fundamentais em JavaScript, permitindo armazenar e organizar dados de forma estruturada. Cada objeto é composto por pares de chave-valor.

Exercício:

Crie um objeto chamado carro com as propriedades marca, modelo e ano. Exiba os valores no console.

const carro = {

    marca: 'Ford',
    modelo: 'Fiesta', 
    ano: 2022,


}

console.log(carro.marca);
console.log(carro.modelo);


Exercício:

Crie um objeto livro e use Object.defineProperty() para tornar o título imutável.



const Livro = { 
    titulo: 'Mágico de Oz',
    ano: '1997',
    edicao: '3',

    
    };

    Object.defineProperty(Livro, 'titulo', {
        writable: false, //torna imutavel
        enumerable: false, //permite ou não em ver a chave
        
 
    });
   


    console.log(Livro)

    Getters e Setters
    Getters e setters são métodos especiais para acessar e modificar propriedades de um objeto.
  

    -> Getters e Setters são métodos especiias usados para acessar e controlar/modificar propriedades de forma controlada;

     um getter - permite acessar
     um setter - permite modificar

       Exercício:
    Crie um objeto contaBancaria com um saldo privado e use getters e setters para acessá-lo e modificá-lo.
    */

     const conta = (function () {

        //Se você deseja controlar o acesso ao saldo de forma privada, o correto seria usar closures ou getters e setters.

        let saldo = 200000; //saldo -> 
        //saldo encapsulado dentro do closure, não pode ser acessado diretamente de fora do objeto;
        
        return { 
            numero: 2,
            agencia: 3,

            get obterSaldo() {

                return saldo

            },

            set depositoSaldo(valor) {

                if (valor > 0 ) {
                saldo += valor;
                } else { 
                    console.log('Valor inválido')
                }


            }

        };
       
    })();


    conta.depositoSaldo = 100;
    console.log(conta.obterSaldo)