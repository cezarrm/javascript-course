function verificar() {

    var data = new Date()
    var ano = data.getFullYear() //puxa os 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

     if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert('[ERRO] Verifique os dados e tente novamente!')

     }else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {

            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/bebe-h.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'images/jovem-h.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulto-h.png')
                //Adulto

            }else {
                img.setAttribute('src', 'images/idoso-h.png')
                //Idoso

            }



        } else if (fsex[1].checked){
            
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/bebe-m.png')
                // Criança
            } else if (idade >= 10 && idade < 21) {

                img.setAttribute('src', 'images/jovem-m.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulto-m.png')
                //Adulto

            }else {
                img.setAttribute('src', 'images/idoso-m.png')
                //Idoso

            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
     }

}