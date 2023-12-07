function adicionar() {

    let n = document.getElementById(intro)
    let tab = document.getElementById(lista)
 
    if (n.value.length < 1 ){

        window.alert('Por gentileza adicione um número válido!')

    }else {
      
        let item = document.createElement('option')
        item.text = document.getElementById(`Valor ${n} adicionado.`)
        tab.appendChild (item)
        

    }



}

