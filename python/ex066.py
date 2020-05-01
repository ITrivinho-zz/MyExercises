s = c = 0
msg = 'Digite 999 para parar'
print('=' * 40)
print(f'{msg:^40}')
print('=' * 40)
while True:
    n = int(input('Digite um número: '))
    if n == 999:
        break
    s += n
    c += 1

print(f'\nA soma dos {c} valores é {s}')
