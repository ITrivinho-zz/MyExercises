//Função Par ou Ímpar
function parimp(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

let num = parimp(11)
console.log(num)


//Função para somar
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(3, 8))