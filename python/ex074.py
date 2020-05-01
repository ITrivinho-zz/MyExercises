from random import randint
nums = randint(0, 20)

for c in range(0, 4):
    nums += (randint(0, 20), )
menor = maior = 0
for c in range(0, 5):
    if c == 0:
        menor = maior = nums[c]
    elif nums[c] < menor:
        menor = nums[c]
    elif nums[c] > maior:
        maior = nums[c]
print('Os valores sorteados foram: ', end='')
for valor in nums:
    print(valor, end=' ')
print(f'\nO maior valor é {maior} \nJá o menor é {menor}')
