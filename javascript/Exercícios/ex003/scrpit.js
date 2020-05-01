function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let msg = ''

        if (p <= 0){
            alert('Passo inválido. Considerando passo 1')
            p = 1
        }
        if (i < f){
            for (i; i <= f; i += p){
                msg += i + ` \u{1F449} `
            }
        } else if (i > f){
            for (i; i >= f; i -= p){
                msg += i + ` \u{1F449} `
            }
        }
        res.innerHTML += `FIM`
        res.innerHTML = msg
    }
}