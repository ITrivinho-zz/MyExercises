function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas`
    if(hora < 12){
        //BOM DIA
        img.src = "img_morning.png"
        document.body.style.backgroundColor = '#e7cc90'
    }else if(hora < 18){
        //BOA TARDE
        img.src = "img_afternon.png"
        document.body.style.backgroundColor = '#c4864d'
    }else{
        //BOA NOITE
        img.src = "img_night.png"
        document.body.style.backgroundColor = '#505155'
    }

}
