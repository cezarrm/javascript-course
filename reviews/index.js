// 1. Trabalhando com Promises
// Crie uma função delayedMessage que retorna uma Promise. A função deve esperar 2 segundos antes de resolver com a mensagem "Olá, mundo!". Teste chamando a função e exibindo o resultado no console.

// function delayedMessage() {

// return new Promise ((resolve, reject) => {

//     setTimeout(() => resolve('Olá Mundo'), 2000);



// });

// }

// delayedMessage()
// .then(valor => {console.log(valor)})
// .catch(error => {console.log(error)})


const promise1 = new Promise((resolve) => setTimeout(() => resolve("Primeira"), 3000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Segunda"), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Erro!"), 1000));

//se uma das promises falhar o Promise.all retorna o erro. 
//retorna na ordem se n tiver erro

// Promise.all([promise1, promise2, promise3])
// .then(response => console.log(response))
// .catch(error => console.error(error))


// Promise.race([promise1, promise2, promise3])
// .then(response => console.log(response))
// .catch(error => console.error(error)) //retorna a primeira executada (sendo resolvida ou rejeitada)

// //se uma falhar race tbm retorna o erro


//any retorna a primeira resolvida
Promise.any([promise1,promise2,promise3])
.then(resolve => console.log(resolve))
.catch(error => console.error(error))

