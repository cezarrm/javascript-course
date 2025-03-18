// 705.484.450-52 070.987.720-03

function ValidaCPF(cpfEnviada) {
    Object.defineProperty(this, 'cpfLimpo', {
        
        enumerable: true,
        get: function () {
            
            return cpfEnviada.replace(/\D+/g, '');

        } 
    
    });
    
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequecia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCPF = cpfParcial + digito1 + digito2;

    return novoCPF === this.cpfLimpo;    
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += regressivo * Number(val);
        regressivo--
        return ac;

    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);

}

ValidaCPF.prototype.isSequecia = function () {

    const sequecia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); //quantas vezes eu quero que repita;

    return sequecia === this.cpfLimpo;


};


const cpf = new ValidaCPF ('070.987.720-03');
console.log(cpf.valida())