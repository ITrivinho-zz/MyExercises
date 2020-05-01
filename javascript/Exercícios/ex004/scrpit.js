function tabuada(){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    
    if (num.value.length == 0){
        alert('Por favor, digite um número!')
        tab = 'Sem um número multiplicador não é possível fazer uma tabuada'
    } else {
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            n = Number(num.value)
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }
}