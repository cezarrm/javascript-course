//AJAX
const request = obj => {

    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //representa o xml, nome padrao
    xhr.open(obj.method, obj.url, true); //sincrorno ou assincroro)    get //buscar algum conteúdo 
    //obj.method -> como se fosse o form do HTML (post ou get)
    xhr.send(); // se fosse post

    xhr.addEventListener('load', () => { //quando ela terminou de carregar
        if(xhr.status >= 200 && xhr.status < 300) { //codigo http de sucesso
            resolve(xhr.responseText); //função callback de sucesso
            //responseText é o retorno do que foi buscado

        } else {
            reject(xhr.statusText)
        }
 
    });
})
}

document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        carregaPagina(el);
    }

});

async function carregaPagina(e){
try {
    const href = e.getAttribute('href'); 
    const response = await request({
        method: 'GET',
        url: href,
         }
    );
    carregaResultado(response)
} catch (e) {
    console.log(e)
}
}
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;

}
//codigos HTTP


//verbo http
//open(verbo(get), url, assincrono(true) ou sync(false)

//xhr.onload

//codigos http
//entre 200 e 300 -> aceitar comoo sucesso
//300 pra cima -> n aceitar como sucesso considerar erro (nesse caso)