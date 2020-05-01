let nums = []
let num = document.querySelector('input#txtn')
let sel = document.querySelector('select#selnum')
let res = document.querySelector('div#res')

function verificador(valor){ 
    if (Number(valor) <= 0 || Number(valor) > 100 || nums.indexOf(Number(valor)) != -1){
        return true
    }
} 

function add(){

    if (verificador(num.value)){
        alert('Valor inválido ou já adicionado')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado` //mostra o nº adicionado
        sel.appendChild(item)
        res.innerHTML = ''
    
        nums.push(Number(num.value)) //add nº ao array    
    }
    num.value = ''
    num.focus()
}

function analisar(){
    let maior = nums[0]
    let menor = nums[0]
    let soma = 0
    let media = 0

    if (nums.length == 0){
        alert('Digite algum valor para realizar a analise')
    } else {    
        for (let c = 0; c < nums.length; c++){
            // Verificando maior e menor
            if (nums[c] > maior){
                maior = nums[c]
            } else if (nums[c] < menor){
                menor = nums[c]
            }
            // Somatória dos valores
            soma += nums[c]
        }

        // Média dos valores
        media = soma / nums.length
        
        // Mostrando os dados na tela
        res.innerHTML = `<br> Ao todo, temos ${nums.length} números cadastrados <br>`
        res.innerHTML += `<br> O maior valor informado foi ${maior} <br>`
        res.innerHTML += `<br> O menor valor informado foi ${menor} <br>`
        res.innerHTML += `<br> Somando o todos os valores temos ${soma} <br>`
        res.innerHTML += `<br> A média dos valores digitados é ${media} <br>`
    }
}