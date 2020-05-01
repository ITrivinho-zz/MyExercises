var agora = new Date().getHours()
if (agora < 12){
    console.log('Bom dia!')
}else if(agora < 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}