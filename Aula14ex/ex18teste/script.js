function calcular() {

    let numb = document.getElementById('multi')
    let tab = document.getElementById('saida')

    if(numb.value.length == 0){

        window.alert('Tudo errado irmão!') 
    }else {
        let n = Number(numb.value)
        c = 1 

        while(c <= 10){

            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild (item)
            c++


         }




    }



}