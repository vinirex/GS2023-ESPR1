Empresas = []
Usuarios = []
Prontuarios = []

class Empresa:
    def __init__(self, nome, codigo ):
        self.nome = nome
        self.codigo = codigo

class User:
    def __init__(self, nome, senha, empresa ):
        self.nome = nome
        self.senha = senha
        self.empresa = empresa

class Prontuario:
    def __init__(self, nome, idade, altura, peso, sangue, vicios, detalhes):
        self.nome = nome
        self.idade = idade
        self.altura = altura
        self.peso = peso
        self.sangue = sangue
        self.vicios = vicios
        self.detalhes = detalhes
    Exames = []
    def Exame(self, exame, resultado, detalhes):
        response = [exame, resultado, detalhes]
        self.Exames.append(response)

def CriarEmpresa(nome, codigo):
    Empresas.append(Empresa(nome, codigo))

def CriarUser(nome, senha, empresa ):
    for i in range(len(Empresas)):
        if Empresas[i].codigo == empresa or Empresas[i].nome == empresa :
            code = Empresas[i]
        else:
            return
    Usuarios.append(User(nome, senha, code))

def CriarProntuario(nome, idade, altura, peso, sangue, vicios, detalhes):
    Prontuarios.append(Prontuario(nome, idade, altura, peso, sangue, vicios, detalhes))

def AdicionarCampo(prontuario, exame, resultado, detalhes):
    prontuario.Exame(exame, resultado, detalhes)

def AcharProntuario(nome, idade):
    for i in range(len(Prontuarios)):
        if Prontuarios[i].nome == nome and Prontuarios[i].idade == idade:
            return Prontuarios[i]
    return ''

def Entrar(nome, senha):
    for i in range(len(Usuarios)):
        if Usuarios[i].nome == nome and Usuarios[i].senha == senha:
            return Usuarios[i]
    return ''

def MostrarProntuario(Prontuario):
    print(f'Prontuario:\n nome: {Prontuario.nome}\n idade: {Prontuario.idade} anos\n altura: {Prontuario.altura}m\n peso: {Prontuario.peso}kg\n tipo sanguineo: {Prontuario.sangue}')
    print(f'vicios:')
    for i in range(len(Prontuario.vicios)):
        print(Prontuario.vicios[i])
    print(f'detalhes: {Prontuario.detalhes}')
    for i in range(len(Prontuario.Exames)):
        print(f'Exame de {Prontuario.Exames[i][0]} | resultado: {Prontuario.Exames[i][1]}\n {Prontuario.Exames[i][2]}')

CriarEmpresa('Hospital de Testes', 'HdT')
CriarUser('Usuario', '12345678', 'HdT')
CriarProntuario('Paciente Teste', 20, 1.70, 70, 'A+',['nenhum'],'')

loged_as = ''

while loged_as == '':
    print("Login")
    nome = input('| Usuario: ')
    senha = input('| Senha: ')
    loged_as = Entrar(nome, senha)

while True:
    print('Comandos:\n 1. Criar novo Prontuario\n 2. Achar um Prontuario\n 3. Modificar um Prontuario \n 4. Listar os Prontuarios \n 5. Atualizar o Banco de Dados')
    choice = input('> ')
    if choice == "1":
        nome = input('Nome do Paciente: ')
        idade = int(input('Idade: '))
        altura = float(input('Altura: '))
        peso = int(input('Peso: '))
        sangue = str(input('Sangue: ')).upper()
        vicios = str(input('Vicios: ')).lower().split(', ')
        detalhes = input('Detalhes: ')
        CriarProntuario(nome, idade, altura, peso, sangue, vicios, detalhes)
        print('Prontuario Criado!')
    elif choice == "2":
        while True:
            nome = input('Nome: ')
            try:
                idade = int(input('Idade: '))
            except ValueError:
                idade = -1
            if idade >= 0:
                break
        prontuario = AcharProntuario(nome,idade)
        if prontuario != '':
            MostrarProntuario(prontuario)
        else: print('Prontuario Não Encotrado!')
    elif choice == "3":
        while True:
            nome = input('Nome: ')
            try:
                idade = int(input('Idade: '))
            except ValueError:
                idade = -1
            if idade >= 0:
                break
        prontuario = AcharProntuario(nome,idade)
        if prontuario != '':
            exame = input('Digite o Exame que deseja adicionar: ')
            resultado = input('Resultado: ')
            detalhes = input('Detalhes: ')
            AdicionarCampo(prontuario, exame, resultado, detalhes)
        else: print('Prontuario Não Encotrado!')
    elif choice == "4":
        for i in range(len(Prontuarios)):
            print(f"{Prontuarios[i].nome} | {Prontuarios[i].idade}")
    elif choice == "5":
        # Adicione o codigo que achar necessario aqui
        print('WIP - Work In Progress | Ferramenta não implementada')
    else:
        break
