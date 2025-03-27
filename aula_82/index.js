//Getters e Setters

//symbol pode ser utilizado para criar chave privada dentro do objeto;
//um symbol nunca via ser igual ao outro;


const _velocidade = Symbol('velocidade'); //gera symbol e deixa velocidade privada;


class Carro {

    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; //troca velocidade por [] e usa "nome dinâmico";
    }

g


    set velocidade(valor) { //criei um getter e um setter para a velocidade que é privada
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;

    } 

    get velocidade() { //usa o get para acessar o _velociade;
        console.log('GETTER')
      return this[_velocidade]
    }


    acelerar () {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar () {

        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;

    }
}

const c1 = new Carro('Fusca');

// for (let i = 0; i <= 200 ; i++) {

//     c1.acelerar();

// }


//acessar a chave [_velocidade] usasse getter

                    //o setter está no sinal de atribuição
c1.velocidade = 99; //vc pode colocar um numero entre 1 a 100, o setter e getter impedem que alterem fora da regra;
console.log(c1.velocidade)



