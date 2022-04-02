# Beauty Planner

<h4 align="center"> 
	🚧  Beauty Planner 🚀 Em andamento ... 🚧
</h4>

## Tópicos

<div>
 • <a href="#-sobre-o-beauty-panner">Sobre o Beauty Planner</a> </br>
 • <a href="#-tecnologias">Tecnologias</a> </br>
 • <a href="#-funcionalidades">Funcionalidades</a> </br>
 • <a href="#-estrutura-de-pastas">Estrutura de pastas</a> </br>
 • <a href="#-design-system">Design System</a> </br>
 • <a href="#-layout">Layout</a> </br>
 • <a href="#-como-executar-o-projeto">Como executar</a> </br>
 • <a href="#-autor">Autor</a> </br>
 • <a href="#user-content--licença">Licença</a></br>
</div>

## 💻 Sobre o Beauty Planner

Beauty Planner é uma aplicação que possibilita a conexão entre uma pessoa comum e um profissional de beleza com apenas três cliques, e sem sair do lugar.

Através de um agendamento rápido, você não vai precisar enfrentar filas ou aguardar para ser atendido. Vamos agendar o seu horário com o profissional de beleza desejado, e basta que você esteja lá no horário definido.

## 🚀 Tecnologias

Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

#### **Website** ( [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) )

- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://github.com/axios/axios)
- [StyledComponents](https://styled-components.com/)
- [React Modal](https://reactcommunity.org/react-modal/)

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** → **[Protótipo (Beauty Planner)](https://www.figma.com/file/RCA3Kw60C7dz7vS8MNrJLE/Beauty-Planner)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[Prettier](https://prettier.io/)**
- Fontes: **[Comfortaa](https://fonts.google.com/specimen/Comfortaa?query=comforta)**, **[Raleway](https://fonts.google.com/specimen/Raleway?query=raleway)**
- Versionamento: **[Git](https://git-scm.com)**

## ⚙️ Funcionalidades

- [x] Construção da LandingPage;
- [x] Componentização do Texting e Heading do DesignSystem;
- [ ] Responsividade da LandingPage;
- [ ] Implementar funcionalidade no input da LandingPage;
- [x] Criar as rotas da aplicação;
- [x] Implementar rotas para a Search Page;
- [x] Componentização da Search Page;
- [ ] Estilização da Search Page;
- [ ] Adicionar mapa na Search Page;
- [ ] Responsividade da Search Page;
- [x] Implementar rotas para a Store Page;
- [ ] Componentização da Store Page;
- [ ] Estilização da Store Page;
- [ ] Responsividade da Store Page;

## 🛠 Estrutura de pastas

Afim de facilitar a organização e manutenção do código, foi definido um padrão para organização das pastas neste projeto.

- \_assets

  - Estilização global;
  - Icones;
  - UI;
  - Imagens;

- components

  - Todos os componentes globais do projeto;

- context

  - Armazena os contextos da aplicação;

- pages

  - Páginas da aplicação;

- services

  - Todos os acessos externos;

- helpers

  - Funções para formatação de datas;
  - Funções para formatação de números;

- hooks
  - Custom hooks

## 🎨 Design System

Com base na repetição dos componentes, foi criado um Design System para otimizar a composição das páginas e layout das aplicações. O design system vai ser responsável por armazenar toda a estilização dos componentes que utilizamos, e vamos alterar entre as variações com apenas algumas propriedades que passamos para o componente.

Como o layout foi construído no Figma utilizando px, criei uma tabela de conversão entre px e rem, tendo em vista que vamos utilizar uma unidade de medida relativa para a construção de todos os componentes do projeto.

Para facilitar ainda mais a composição dos componentes, vamos passar as medidas em px para a construção de cada componente na nossa aplicação, porém, o design system vai converter para rem e utilizar a unidade de medida relativa para os componentes.

Até o momento, já foi realizado a construção do componente Text e do componente Title, com todas as variantes que vamos utilizar na aplicação. O próximo passo é realizar a construção do componente Button e Input

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/RCA3Kw60C7dz7vS8MNrJLE/Beauty-Planner">
  <img alt="Made by vitor" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

Adicionar imagens do layout

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta server)
2. Frontend (pasta client)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/vitorrsousaa/BeautyPlanner-Client.git

# Vá para a pasta da aplicação Front End
$ cd client

# Instale as dependências
yarn install

# Rode a aplicação
yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 🧑🏻 Autor

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/94024958?v=4" width="100px;" alt=""/>
 <b>Vitor Sousa</b>🚀
<br />

Feito por Vitor Sousa 👋🏻 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Vitor%20Sousa-ff512f?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitorr-sousaa//)](https://www.linkedin.com/in/vitorr-sousaa//)
[![Gmail Badge](https://img.shields.io/badge/-v.sousa.cf@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:v.sousa.cf@gmail.com)](mailto:v.sousa.cf@gmail.com)

## 📝 Licença
