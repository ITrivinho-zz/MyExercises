let num = [3, 7, 9, 1, 6, 2]

console.log(num)
console.log(`${num}\n`)

num.sort()

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}