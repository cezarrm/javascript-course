//funçãoc construtora -> objetos cria objetos e retorna objeto (precisa mudar convensão)
// precisa começar com letra maiuscula (Pessoa) precisa usar a palavra new
// função fabrica -> objetos (criaPessoa)
function Pessoa(nome, sobrenome) { //molde
    //atributos ou métodos privados
    const ID = 123456; //variavel privada só vive dentro desse escopo

    const metodoInterno = () => {


    };
    //atributos ou métodos públicos (pode acessar fora da função)
    this.nome = nome
    this.sobrenome = sobrenome
    //n precisa retornar nada

    this.metodo = () => {
        console.log(this.nome + ' sou um método!')

    };
}

const p1 = new Pessoa('Luiz','Otavio'); //cria objeto com os moldes PESSOA precisa usar a palavra new
const p2 = new Pessoa('Maria','Oliveira');

p1.metodo();
p2.metodo();