// 1. Criando e Encadeando Promises
// Crie uma função fetchUserData(userId) que simule a busca de dados de um usuário e retorne uma Promise. Encadeie um .then() para exibir os dados e um .catch() para tratar erros.

// function fetchUserData(UserId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=> {
//             const users = {
//                 1: {nome: 'Luiz', age: 2},
//                 2: {nome: 'Maria', age: 12},
//                 3: {nome: 'Maria', age: 12}
//             }

//             if (users[UserId]) {
//                 resolve(users[UserId]);
//             } else { 
//                 reject('ERRO: Usuário não encontrado!')
//             }
//         }, 2000);
//     });

// }

// fetchUserData(5)
// .then((user) => {

//     console.log('Usuário encontrado', user );

// }).catch ((error) => {

// //     console.log(error);
// // }).finally(() => { 

// //     console.log('Operação Finalizada')

// // })


// // 3. Usando Promise.all
// // Crie três funções que simulam chamadas assíncronas e retornam Promises com diferentes tempos de espera. Depois, use Promise.all() para executar todas simultaneamente e exibir os resultados quando todas terminarem.

// function task1 () { return new Promise ((resolve) => setTimeout( () => resolve('Tarefa 1 executada!'), 1000))

// } 

// function task2 () { return new Promise ((resolve) => setTimeout( () => resolve('Tarefa 2 executada!'), 2000))

// } 

// function task3 () { return new Promise ((resolve) => setTimeout( () => resolve('Tarefa 3 executada!'), 800))

// } 

// function task4 () { return new Promise ((resolve) => setTimeout( () => resolve('Tarefa 4 executada!'), 500))

// } 


// const promises = [
//     task1(),
//     task2(),
//     task3(),
//     task4(),
// ];

// // Promise.all(promises)
// // .then((msg) => {
// //     console.log(msg);
// // }); 

// Promise.race(promises)
// .then((msg) => {
//     console.log(msg);
// })

// function getDataFromServer(callback) {
//     setTimeout(() => {
//       callback("Dados recebidos do servidor");
//     }, 2000);
//   }


function getDataFromServer(req) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
         const server = 2;   
            if (req === server) {
                resolve(req);
            } else{
                reject('Dado não encontrado!')
            }
            
        }, 2000);
    })

}

getDataFromServer(3)
.then((data) => {
    console.log(`Dado encontrado: ${data}`)
}).catch((error) => {

    console.log(`'ERRO! ${error}`)

}).finally(() => {
    console.log('Operação finalizada!')
})