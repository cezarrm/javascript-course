function calc() {

let ini = document.getElementById('txt1')
let fin = document.getElementById('txt2')
let pas = document.getElementById('txt3')
let res = document.getElementById('res')

if(ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0){


    window.alert('ERRO: Faltam dados')



} else {

    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fin.value)
    let p = Number(pas.value)

    if(i < f){

    for(let c = i; c <= f; c += p){

    
        res.innerHTML += `-> ${c}`


    }
}else {

    for(let c = i; c >= f; c -= p){

        res.innerHTML += `-> ${c}`


    }
    

}
}
}