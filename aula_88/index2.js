//async await
//

function rand (min=0, max=3) {
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
        
        resolve(msg.toUpperCase() + ' - Passei na promise'); 
        }, tempo);
    });
}

// esperaAI('Fase 01', rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAI('Fase 02', rand())
// }).then(fase => {
//     console.log(fase);
//     return esperaAI('Fase 03', rand())
// })
// .then(fase => {
//     console.log(fase);
//     return fase;
// }).then ( fase => {
//     console.log('Terminamos na fase', fase);
// })
// .catch(erro => {
//     console.log(erro)
// })

//so posso usar async e await em uma função

async function executa() {
   try {
    const fase1 = await esperaAI('Fase 01', 1000); //fazer ser executado como se fosse sincrono (codigo pause até o valor ser retornado, resolvido ou rejeitado)
   console.log(fase1);

   setTimeout(() => {
    console.log('essa promise estava pendente', fase1)
   }, 1100);
   const fase2 = await esperaAI('Fase 02', rand());
   console.log(fase2);
   const fase3 = await esperaAI('Fase 03', rand());
   console.log(fase3);
   console.log('Terminamos na fase', fase3);

 } catch (e) {
    console.log(e)
 }
}
executa();
//promises tem 3 estados => 
// pendente (estado pending) = > ta sendo executada e não retornou o valor;
// fullfilled => representação de sucesso (resolvida)
// rejected => rejeitada