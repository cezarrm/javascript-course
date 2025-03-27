//promisses
//busca recursos mas n tem noção de quando esses recursos vão voltar
//pede uma api e não tem a noção de quando esses dados vão retornar para se trabalhar
//antigamente se usava callback
function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAI (msg, tempo){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(typeof msg !== 'string') {
        reject('Cai no erro');
        return;
        }
        
        resolve(msg.toUpperCase()); 
        }, tempo);
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject

//promise.all -> vai entregar uma promessa só com os valors dentro de um array;

const promises = [
   // 'Primeiro Valor',
    esperaAI('Promise 1', rand (1,5)),
    esperaAI('Promise 2', rand (1,5)),
    esperaAI('Promise 3', rand (1,5)), //entrega o valor mas não impete o 
    //esperaAI(1000, rand (1,5)),
    // setTimeOut
   // esperaAI(1000, 1000), //se uma rejeita vai rejeitar todos no Promise.all
    //'Outro Valor'
];

// Promise.all(promises) //retorna um array com todos os valores;
// .then(function (valor) {
//     console.log(valor);
// }).catch(function (erro) {
//     console.log(erro);
// });


//Promise.race -> passa várias, a primeira que resolver retorna o valor
// Promise.race(promises) //retorna o que for resolvido mais rapido(tempo)
// .then(function (valor) {
//     console.log(valor);
// }).catch(function (erro) {
//     console.log(erro);
// });

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Pagina em Cache!');
    } else { 
        return esperaAI('Baixei a página', 3000);
    }

}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log('ERRO', e))