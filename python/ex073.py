times = 'Atlético-PR', 'Atlético-GO', 'Atlético-MG', 'Bahia', 'Botafogo', 'Ceará SC', 'Corinthians', 'Coritiba', 'Flamengo', 'Fluminense', 'Fortaleza', 'Goiás', 'Grêmio', 'Internacional', 'Palmeiras', 'Bragantino-SP', 'Santos', 'Sport Recife', 'São Paulo', 'Vasco da Gama'

print('\033[1:34mCampeonato Brasileiro de Futebol - 2020\033[m')
print('\033[32m5 primeiros colocados\033[m')
for c in range(0, 5):
    print(f'\033[1m{c+1}º\033[m {times[c]}')

print('\n\033[32m4 últimos colocados\033[m')
for c in range(-1, -5, -1):
    print('-', times[c])

print('\n\033[32mOrdem Alfabética\033[m')
for c in sorted(times):
    print('-', c)

print('\n\033[32mFlamengo -> Posição\033[m')
print(f'{times.index("Flamengo") + 1}ª posição')
