fetch ('pessoas.json')
.then(resposta => resposta.json())
.then(json => carregaElemetosNaPagina(json));

// axios('pessoas.json')
// .then(resposta => carregaElemetosNaPagina(resposta.data)) //n tem nova promisse

function carregaElemetosNaPagina (json) {
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const tdName = document.createElement('td')
    tdName.innerHTML = '<strong>Nome</strong>'
    tr.appendChild(tdName)
    
    const tdIdade = document.createElement('td')
    tdIdade.innerHTML = '<strong>Idade</strong>'
    tr.appendChild(tdIdade)
    table.appendChild(tr)
    
    for (let pessoa of json) {
        const tr = document.createElement('tr');
       
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        // let td3 = document.createElement('td');
        // td3.innerHTML = pessoa.salario;
        // tr.appendChild(td3);

        table.appendChild(tr);
    
    }    

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
    
    
}