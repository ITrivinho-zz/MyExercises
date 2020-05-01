msg = 'BANCO 24 HORAS'
print('=' * 30)
print(f'{msg:^30}')
print('=' * 30)

cinq = vinte = dez = um = 0
cedulas = [50, 20, 10, 1]
var = [cinq, vinte, dez, um]
c = 0
valor = int(input('Digite o valor a sacar: R$'))
print('-' * 30)

while True:
    if valor >= cedulas[c]:
        var[c] = valor // cedulas[c]
        valor -= var[c] * cedulas[c]
    if var[c] != 0:
        print(f'Total de {var[c]} cédulas de R${cedulas[c]:.2f}')
    c += 1
    if valor == 0:
        break
print('-' * 30)
print(f'Volte sempre ao {msg}! Agradecemos a preferência.')
