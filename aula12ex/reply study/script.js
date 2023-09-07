

function validar() { 

    var data = new Date()
    var ano = data.getFullYear() //puxa os 4 digitos do ano
    var nascimento = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(nascimento.value.length == 0 || Number(nascimento.value) > ano) {

        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if(fsex[0].checked){
                
                genero = 'homem'

                        if (idade >= 0 && idade < 10){
                        //bebe   
                        img.setAttribute('src', 'images/bebe-h.png')
                        }else if(idade < 21) {

                            //jovem
                            img.setAttribute('src','images/jovem-h.png')

                            
                        }else if(idade > 21 && idade <= 51)  {
                        //adulto
                        img.setAttribute('src', 'images/adulto-h.png')


                        }else {

                            //idoso
                            img.setAttribute('src', 'images/idoso-h.png')
                        }


            
        }if(fsex[1].checked){

            genero = 'mulher'

            if (idade >= 0 && idade < 10){
                //bebe   
                img.setAttribute('src', 'images/bebe-m.png')
                }else if(idade < 21) {

                    //jovem
                    img.setAttribute('src','images/jovem-m.png')

                    
                }else if(idade > 21 && idade <= 51)  {
                //adulto
                img.setAttribute('src', 'images/adulto-m.png')


                }else {

                    //idoso
                    img.setAttribute('src', 'images/idoso-m.png')
                }

        }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
            res.appendChild(img)
    }
}