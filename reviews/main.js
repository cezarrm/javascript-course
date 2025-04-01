// Exercício 1: Requisição GET com Fetch API
// Crie uma página HTML com um botão que, ao ser clicado, faz uma requisição GET para a API pública JSONPlaceholder e exibe o título e o corpo do post na tela.

// Passos:
// Use fetch para buscar os dados.

// Converta a resposta para JSON.

// Exiba os dados na tela.


const button = document.getElementById('fetchAPI');
const resultado = document.querySelector('.resultado')

button.addEventListener('click', e => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => {
        carregElementos(json)})
    .catch(error => {
        console.error('Erro na requisição', error)
    });

})

function carregElementos(json) {
    resultado.innerHTML = ''
    const h2 = document.createElement('h2')
    h2.innerHTML = json.title;
    resultado.appendChild(h2)
    

    const p = document.createElement('p')
    p.innerHTML = json.body;
    resultado.appendChild(p)
     
          

    }

