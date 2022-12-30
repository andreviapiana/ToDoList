<p align="center">
  <h1 align="center"><a href="https://ignite_todo.netlify.app/">ToDo List :rocket: </a></h1>
</p>


Este é o resultado de um estudo de React.js.

___

## 💻 Sobre
A ideia deste projeto é criar uma aplicação para uma lista de tarefas, na qual o usuário pode adicionar tarefas a serem realizadas e atualizar o status das mesmas conforme forem executadas. O projeto lista a quantidade de tarefas cadastradas e completadas, e ainda faz uso do LocalStorage do navegador para que seja possível o usuário fechar e abrir novamente a página sem perder a sua lista de tarefas.
A filtragem das tarefas é feita através de um ID gerado automaticamente pelo UUID. Desta forma, caso o usuário cadastre 2 tarefas com o mesmo nome, a atualização ou exclusão de uma não resultará na exclusão da outra.
Todas as informações das tarefas são salvas dentro de um array de objetos utilizando o useState do React.

___

## 🎨 Layout
A página funcionando em formato desktop é vista na imagem abaixo:

![ScreenClick](https://user-images.githubusercontent.com/106932234/207999363-681023ce-99d2-4813-bbcd-b18ae96bd676.gif)

___

## 🛠 Tecnologias

As seguintes tecnologias foram empregadas na criação deste projeto:

- [ReactJs](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [uuid](https://www.npmjs.com/package/uuid)

___

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
$ git clone git@github.com:andreviapiana/ToDoList.git
```
___

#### 🚧 Executando o Projeto
```bash

# Navegue até o diretório
$ cd ToDoList

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do BackEnd
$ npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada. Basta digitar o mesmo endereço em seu navegador preferido. O endereço usado na criação do projeto foi este:

  http://localhost:5173/
```

___


[O resultado FINAL pode ser visto aqui](https://ignite_todo.netlify.app/)
