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


// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Primeira"), 3000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Segunda"), 2000));
// const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Erro!"), 1000));

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
// Promise.any([promise1,promise2,promise3])
// .then(resolve => console.log(resolve))
// .catch(error => console.error(error))



// 3. Async / Await
// Reescreva a função delayedMessage do primeiro exercício usando async/await.




// function delayedMessage(segundos) {

// return new Promise ((resolve) => {

//     setTimeout(() => resolve('Olá Mundo'), segundos * 1000);

// });

// }

// async function executar () { //define uma função assicrona

//     const resultado = await delayedMessage(2); //faz o codigo pausar até a função ser realizada
//     console.log('Iniciando...')
//     console.log(resultado)
//     console.log('Finalizado!')
// }
// executar()

// Crie também uma função fetchData que simula uma requisição a um servidor. Ela deve esperar 3 segundos e depois retornar um objeto { data: "Conteúdo recebido" }. Utilize async/await para chamar essa função e exibir o resultado no console.



// function fetchData () {
//     const obj = {data: 'counteúdo recebido'}
//     return new Promise((resolve, reject) => {

//         setTimeout(() => resolve(obj), 3000);


//     })


// }

// async function executa() {
//     console.log('Iniciando')
//     const resultado = await fetchData();
//     console.log(resultado);

// }

// executa()


// 4. XMLHttpRequest com Promises (GET)
// Crie uma função chamada getDataWithXHR(url), que usa XMLHttpRequest e retorna uma Promise.


// function getDataWithXHR(url) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', url, true);
  
//       xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//           resolve(JSON.parse(xhr.responseText)); // Convertendo a resposta em JSON
//         } else {
//           reject(new Error('Erro de requisição: ' + xhr.status));
//         }
//       };
  
//       xhr.onerror = function () {
//         reject(new Error('Erro de requisição!'));
//       };
  
//       xhr.send();
//     });
//   }
  
//   getDataWithXHR('https://jsonplaceholder.typicode.com/posts/1')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


// Exercício 1: Requisição GET com Fetch API
// Crie uma página HTML com um botão que, ao ser clicado, faz uma requisição GET para a API pública JSONPlaceholder e exibe o título e o corpo do post na tela.

// Passos:
// Use fetch para buscar os dados.

// Converta a resposta para JSON.

// Exiba os dados na tela.