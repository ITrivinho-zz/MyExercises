from random import randrange
c = 0
msg = 'Vamos Jogar Par Ou Ímpar'
print('=-' * 15)
print(f'{msg:^30}')
while True:
    print('=-' * 15)
    n1 = int(input('Diga um número: '))
    esc = input('Par ou ímpar? ').lower().strip()[0]
    while esc not in 'pi':
        esc = input('Par ou ímpar? ').lower().strip()[0]
    print('-' * 30)
    n2 = randrange(21)
    r = 'nada'

    if (n1 + n2) % 2 == 0:
        result = 'par'
    else:
        result = 'impar'

    print(f'Você jogou {n1} e o computador {n2}. Total de {n1+n2} deu {result.upper()}')
    print('-' * 30)

    if esc[0] == result[0]:
        print('VOCÊ VENCEU! \nVamos jogar novamente...')
        c += 1
    else:
        print(f'VOCÊ PERDEU! XD :p')
        break
print('=-' * 15, f'\nGAME OVER! {c} vitorias')
