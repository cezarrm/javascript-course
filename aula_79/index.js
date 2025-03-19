//factory function
const falar = {
    
    falar() {
        console.log(`${this.nome} está falando!`);
    },
}
const comer = {
    
    comer() {
        console.log(`${this.nome} está comendo!`);
    },
}

const beber = {
    
    beber() {
        console.log(`${this.nome} está bebendo!`); 
    },
}


//const pessoaPrototye = {...falar, ...comer, ...beber} //copia o que quiser, fica de forma desacoplada;

const pessoaPrototye = Object.assign({}, falar, comer, beber);


function criaPessoa(nome, sobrenome) {
   /* const pessoaPrototye = { //cria proto dentro do objeto;
        falar() {
            console.log(`${this.nome} está falando!`);
        },

        comer() {
            console.log(`${this.nome} está comendo!`);
        },

        beber() {
            console.log(`${this.nome} está bebendo!`); 
        },

    }
*/

    return Object.create(pessoaPrototye, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    }); //retorna objeto vazio
}

const p1 = criaPessoa('Luiz','Otavio')
const p2 = criaPessoa('Maria','Olivia')

p1.comer();