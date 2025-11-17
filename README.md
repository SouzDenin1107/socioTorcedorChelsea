📘 Sistema Sócio Torcedor – Projeto Angular + JSON Server

Este projeto foi desenvolvido como trabalho final da disciplina de Desenvolvimento Web da Universidade FUMEC.
O sistema simula um portal de sócio torcedor, permitindo:

Cadastro de usuários

Escolha e assinatura de planos

Login e autenticação

Troca de plano

Exclusão de conta

O front-end foi desenvolvido usando Angular, e o back-end é simulado com JSON Server (API Fake), atendendo aos requisitos de utilização de uma API REST.

🚀 Tecnologias Utilizadas

Angular 17+

TypeScript

HTML / CSS

JSON Server (API Fake)

Git e GitHub

🔧 Como executar o projeto
1️⃣ Instalar dependências
npm install

2️⃣ Executar o Front-End (Angular)
npm start

3️⃣ Iniciar a API Fake
json-server --watch db.json --port 3000


A API ficará disponível em:

📌 http://localhost:3000/usuarios

📌 http://localhost:3000/planos

🏠 Funcionalidades Principais
⭐ Home

Página inicial com apresentação do sistema.

Navegação rápida para Login e Planos.

💳 Planos

Três categorias disponíveis:

Sócio++

SócioPlus

SuperSócio

Cada plano possui:

Nome

Preço

Benefícios

Botão "Assinar Agora"

📝 Cadastro de Usuário

O usuário pode:

Criar conta

Selecionar um plano

Ser armazenado automaticamente no db.json

🔐 Login

Autenticação simples

Identificação do usuário logado

Redirecionamento automático para o Dashboard

📊 Dashboard do Usuário

Informações exibidas:

Nome do usuário

Plano atual

Time

Jogos assistidos

Lista de próximos jogos

Ações disponíveis:

Alterar plano

Excluir conta

🔄 Troca de Plano

O usuário pode escolher um novo plano.
A página faz a alteração diretamente no backend (JSON Server) e atualiza os dados do usuário.

❌ Exclusão de Conta

O usuário pode excluir sua conta permanentemente.
Após excluir:

Conta removida de db.json

Usuário deslogado

Redirecionado para home


👨‍💻 Desenvolvedores

Denilson Souza

Rafael

Curso: Ciência da Computação – Universidade FUMEC

📄 Licença

Projeto acadêmico — uso educacional.
