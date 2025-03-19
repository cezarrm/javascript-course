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
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} |` + ` Saldo: R$${this.saldo.toFixed(2)}`)
};


function ContaCorrente(agencia, conta, saldo, limite) {

    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}

ContaCorrente.prototype = Object.create(Conta.prototype); //conta filha;
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: ${this.saldo}`)
        
        return;
    }    

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {

    Conta.call(this, agencia, conta, saldo);
   }

ContaPoupanca.prototype = Object.create(Conta.prototype); //conta filha;
ContaPoupanca.prototype.constructor = ContaPoupanca;





const contaCorrete1 = new ContaCorrente(11, 22, 0, 100);

contaCorrete1.depositar(10);
contaCorrete1.sacar(110);
contaCorrete1.sacar(1);

console.log();

const contaPoupanca1 = new ContaPoupanca(12, 33, 0);
contaPoupanca1.depositar(10);
contaPoupanca1.sacar(10);
contaPoupanca1.sacar(1);
