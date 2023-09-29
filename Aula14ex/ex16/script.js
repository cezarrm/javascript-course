function contar() {

var inicio = document.getElementById('start')
var final = document.getElementById('end')
var passo = document.getElementById('step')
var res = document.getElementById('res')

   if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    //window.alert('[ERRO] Faltam dados!')
    
   } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(inicio.value)
    let f = Number(final.value)
    let p = Number(passo.value)
    if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
       p = 1
    }

    if (i < f) {
    for(let c = i; c <= f; c += p) {

        res.innerHTML += `${c} \u{1F449} `

    }
   
   } else {

    for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`

    }
    }
    res.innerHTML += `\u{1f3c1}`
  }
}