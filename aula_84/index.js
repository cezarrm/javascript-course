//métodos de instáncia e estáticos

//são metodos que podem ser acessados na classe sem instanciar na classe (sem usar a new e não vão estar disponíveis na instância)
function test () {  //this aqui é global

    console.log('Esse é meu teste')
}


class ControleRemoto {
    constructor(tv){ 
        this.tv = tv;
        this.volume = 0;
        test();
    }
    //método de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    //método de instancia
    diminuirVolume() {
        this.volume -= 2;
    }
    
    static soma(x, y) { //agora é um metodo estatico, uma função dentro de uma classe;
        return x + y;
        //this aqui é a classe;
    }
}

const controle1 = new ControleRemoto('Samsumg');

console.log(controle1)

console.log(ControleRemoto.soma(2,4)); //Só consigo acessar pela classe!
