var idade = 17
console.log(`A idade é ${idade}`)
if (idade < 16){
    console.log('Não vota')
}else if (idade < 18 || idade > 65){
    console.log('Voto opcional')
}else if (idade < 65){
    console.log('Voto obrigatório')
}
