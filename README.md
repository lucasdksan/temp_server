# Servidor Temporário

**Descrição:**

Esse servidor foi criado para solucionar o problema detectado durante o processo de build de um projeto next js.

## Run Locally

Clone the project

```bash
  git clone 'link do repositório'
```

Install dependencies

```bash
  npm i
```

Start build css

```bash
  npm run dev
```

```bash
  git checkout -b 'edit type/taskName'
```

All new commit

```bash
  git commit -m 'edit type - commitTitle'
```

## Edit Type

- **test**: indica qualquer tipo de criação ou alteração de códigos de teste. Exemplo: Criação de testes unitários.

- **feat**: indica o desenvolvimento de uma nova feature ao projeto. Exemplo: Acréscimo de um serviço, funcionalidade, endpoint, etc.
- **refactor**: usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema. Exemplo: Mudanças de código após um code review
- **style**: empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.
Exemplo: Mudar o style-guide, mudar de convenção lint, arrumar indentações, remover espaços em brancos, remover comentários, etc..
- **fix**: utilizado quando há correção de erros que estão gerando bugs no sistema.
Exemplo: Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.
- **chore**: indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.
Exemplo: Mudar regras do eslint, adicionar prettier, adicionar mais extensões de arquivos ao .gitignore
- **docs**: usado quando há mudanças na documentação do projeto.
Exemplo: adicionar informações na documentação da API, mudar o README, etc.
- **build**: utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
Exemplo: Gulp, adicionar/remover dependências do npm, etc.
- **perf**: indica uma alteração que melhorou a performance do sistema.
Exemplo: alterar ForEach por while, melhorar a query ao banco, etc.
- **ci**: utilizada para mudanças nos arquivos de configuração de CI.
Exemplo: Circle, Travis, BrowserStack, etc.
- **revert**: indica a reverão de um commit anterior.

## Technologies

- **Git**: 2.37.3
- **NVM**: 0.39.3
- **NodeJS**: 18.13.0

## Tech Stack

- **Client**: Express 4.18.2

## Libraries

- **Prisma**: 5.4.1
- **@prisma/client**: 5.4.1
- **zod**: 3.22.4
- **body-parser**: 1.20.2
- **cors**: 2.8.5

## Architecture

### Controllers

- **create**: Create something in the database. Preferably a large amount of data.
- **authenticate**: User authentication controller.
- **verify**: Check something. For example, used in middleware.
- **list**: List information in the database.
- **send**: Send information to something, example sending data by email.
- **filter**: Filter information.
- **upload**: Upload files or form information from the front end.
- **update**: Update information in the database.
- **index**: Searches for information on a specific item in the database.
- **delete**: Delete information from the database.
- **store**: Save a large amount of data to the database.
- **start**: Starting a process that can take a long time.
- **work**: Start a process quickly.
- **search**: Doing a search that can returns x amount of data.

### Models

- **creatingIndex**: 
- **creating**:
- **listing**: 
- **sending**: 
- **filtering**: 
- **loading**: 
- **updating**: 
- **indexing**: 
- **excluding**: 
- **starting**: 
- **looking**: 
- **authenticating**: 
- **checking**: 
- **stocking**: 
- **working**: