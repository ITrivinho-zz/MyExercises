function verificar(){
    var agora = new Date()
    var hoje = agora.getFullYear()
    var ano = document.querySelector('input#txtano')
    var txtres = document.querySelector('div#res')
    if (ano.value.lenght == 0 || ano.value <= 0 || ano.value > hoje){
        window.alert('[ERRO] Verifique as informações e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = hoje - ano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade < 5){
                //bebe
                img.setAttribute('src', 'foto_bebe_h.png')
            }else if (idade <= 10){
                //criança
                img.setAttribute('src', 'foto_crianca_h.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_h.png')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'foto_adulto_h.png')
            }else{
                //velho
                img.setAttribute('src', 'foto_velho_h.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade < 5){
                //bebe
                img.setAttribute('src', 'foto_bebe_m.png')
            }else if (idade <= 10){
                //criança
                img.setAttribute('src', 'foto_crianca_m.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_m.png')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'foto_adulto_m.png')
            }else{
                //velho
                img.setAttribute('src', 'foto_velho_m.png')
            }
        }

        txtres.style.textAlign = 'center'
        txtres.innerHTML = `Detectamos ${genero} de ${idade} anos`
        txtres.appendChild(img)
    }
}