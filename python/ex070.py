c = total = m_mil = menor = n_menor = 0
msg = 'GEEK STORE'
print('-' * 30)
print(f'{msg:^30}')
print('-' * 30)

while True:
    produto = input('Produto: ').strip().capitalize()
    preco = float(input('Preço: R$'))
    c += 1

    total += preco
    if preco > 1000:
        m_mil += 1
    if c == 1:
        n_menor = produto
        menor = preco
    elif preco < menor:
        menor = preco
        n_menor = produto

    esc = input('Deseja continuar? [S/N] ').strip().lower()
    while esc not in 'SsNn':
        esc = input('Deseja continuar? [S/N] ').strip().lower()
    if esc[0] == 'n':
        break
msg = ' FIM DO PROGRAMA '
print(f'{msg:-^40}')
print(f'Total da compra: R${total:.2f}')
print(f'Produtos acima de R$1000,00: {m_mil}')
print(f'Produto mais barato: {n_menor} R${menor:.2f}')
