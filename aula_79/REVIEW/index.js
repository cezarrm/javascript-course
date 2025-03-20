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

*/

const Livro = { 
    titulo: 'Mágico de Oz',
    ano: '1997',
    edicao: '3',

    
    };

    Object.defineProperty(Livro, 'titulo', {
        
        enumerable: false, //permite ou não em ver a chave
        
 
    });
   


    console.log(Livro)
  