m_idade = homens = vinte = 0

while True:
    msg = 'CADASTRE UMA PESSOA'
    print('-' * 30)
    print(f'{msg:^30}')
    print('-' * 30)

    idade = int(input('Idade: '))
    sexo = input('Sexo: [M/F] ').lower().strip()
    while sexo[0] not in 'mfMF':
        sexo = input('Sexo: [M/F] ')
    print('-' * 30)

    esc = input('Deseja continuar? [S/N] ').lower().strip()
    while esc[0] not in 'snSN':
        esc = input('Deseja continuar? [S/N] ').lower().strip()

    if idade > 18:
        m_idade += 1
    if sexo == 'm':
        homens += 1
    if idade < 20 and sexo == 'f':
        vinte += 1

    if esc == 'n':
        break
msg2 = ' FIM DO PROGRAMA '
print(f'{msg2:=^37}')
print(f'Total de pessoas com mais de 18 anos: {m_idade}')
print(f'Ao todo temos {homens} cadastrados')
print(f'E temos {vinte} mulheres com menos de vinte anos')
