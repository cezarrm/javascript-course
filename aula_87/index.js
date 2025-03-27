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
        if(typeof msg !== 'string') reject(new Error('ERRO'))
        
        setTimeout(() => {
        resolve(msg); //só colocandoa qui já garante
        }, tempo);


    });
    //resolve -> esse código executou com sucesso então resolve pra mim
    // reject -> esse código deu um erro rejeita isso pra mim;
    
    
   
}
//then vai executar depois que promisse for concluida
//quando chamar reject um outro método (catch()) vai capturar;
esperaAI('Conexão BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAI('Buscando dados da Base', rand(1, 3));
    }).then (resposta => {
        console.log(resposta)
        return esperaAI(222, rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then (() => {
        console.log('Exibe dados na tela')
    })
    .catch(e => { //puxa erro do reject

        console.log('ERROR', e)
    }) 


// esperaAI('Frase 1', rand(1, 3));
// esperaAI('Frase 2', rand(1, 3));
// esperaAI('Frase 3', rand(1, 3)); 

// usar promisses para garantir uma ordem de execução;