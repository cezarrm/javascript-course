//heranças com classes;

class DispositivoEletronico {
 constructor(nome) {
    this.nome = nome;
    this.ligado = false;
 }

 ligar(){
    if (this.ligado){
        console.log(`${this.nome} Dispositivo já ligado!`)
        return;
    }

    this.ligado = true;
 }

 desligar(){

    if (!this.ligado){
        console.log(`${this.nome} Dispositivo já está desligado!`)
        return;
    }

    this.ligado = false;
 }
}

class Smartphone extends DispositivoEletronico {

    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor (nome, temWifi) {

        super(nome);
        this.temWifi = temWifi;

    }
}


const s1 = new Smartphone ('iPhone','preto','XS');
console.log(s1)


    

