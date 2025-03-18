//polimorfismo -> métodos se comportam de maneira diferente em subclasses; classes filhas = funcções construtoras;
//conta bancaria -> contaria poupança e conta corrente; método sacar funcionando diferentes;


//Superclass
function Conta(agencia, conta, saldo) {

    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo Insuficiente: ${this.saldo}`)
        
        return;
    }    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} |` + ` Saldo: R$${this.saldo.toFixed(2)}`)
};


function ContaCorrente(agencia, conta, saldo, limite) {

    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: ${this.saldo}`)
        
        return;
    }    
    this.saldo -= valor;
    this.verSaldo();
};


const contaCorrete1 = new ContaCorrente(11, 22, 0, 100);

contaCorrete1.depositar(10);

