
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
 

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'images/manha.png'
        document.body.style.background = '#d5d3d4'


    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/tarde.png'
        document.body.style.background = '#7a93a7'


        //BOA TARDE
    } else {
        // BOA NOITE!
        img.src = 'images/noite.png'
        document.body.style.background = '#101c20'
    }

     
    }
 