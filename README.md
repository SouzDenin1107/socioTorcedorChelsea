# 🎽 Sistema Sócio Torcedor – Projeto Angular + JSON Server

Este projeto foi desenvolvido como trabalho final da disciplina de Desenvolvimento Web.  
O sistema simula o portal de um programa de sócio torcedor, permitindo cadastro de usuários, escolha de planos, login, troca de plano e exclusão de conta.

Todo o front-end foi desenvolvido em **Angular**, e o back-end é simulado utilizando **JSON Server (API Fake)**.

---

## 🚀 Funcionalidades Principais

### 🏠 **Home**
- Página inicial com apresentação do programa Sócio Torcedor.
- Navegação para Login e Planos.

### 🛒 **Planos**
- Três planos disponíveis: Sócio++, SócioPlus e SuperSócio.
- Dados carregados via API Fake (JSON Server).
- Página de detalhes com benefícios do plano.

### 📝 **Criar Conta (Assinar Plano)**
- Formulário reativo com validações.
- O usuário já cria sua conta vinculado a um plano.
- Registro salvo na API Fake (POST /usuarios).

### 🔐 **Login**
- Autenticação via API Fake.
- Exibição de mensagens de erro.
- Redirecionamento para o Dashboard quando sucesso.

### 📊 **Dashboard**
- Exibe informações do usuário logado:
  - Nome  
  - Plano atual  
  - Jogos assistidos  
  - Próximos jogos  
  - Time favorito (Paysandu)
- Botões:
  - **Trocar plano**
  - **Excluir conta**

### 🔄 **Trocar Plano**
- Lista todos os planos no sistema.
- Usuário seleciona um novo plano.
- Atualização via API Fake (PATCH /usuarios/:id).

### ❌ **Excluir Conta**
- Remove o usuário do sistema (DELETE /usuarios/:id).
- Redireciona para a página inicial.

---

## 🗄️ API Fake (JSON Server)

Este projeto utiliza **JSON Server** para simular uma API REST.

Para iniciar a API:

```bash
npx json-server --watch db.json --port 3000

GET    /planos
GET    /usuarios
POST   /usuarios
PATCH  /usuarios/:id
DELETE /usuarios/:id

🛠️ Tecnologias Utilizadas

Angular 16+

TypeScript

HTML5 / CSS3

JavaScript

JSON Server

Git & GitHub

GitFlow (main / develop)

src/
 └── app/
      ├── pages/
      │     ├── home/
      │     ├── login/
      │     ├── produtos/
      │     ├── produto-detalhe/
      │     ├── dashboard/
      │     ├── trocar-plano/
      │     └── assinar/
      └── service/
            ├── usuarios.service.ts
            ├── produtos.service.ts
            └── auth.service.ts
db.json

▶️ Como Rodar o Projeto
1. Instalar dependências
npm install

2. Rodar o backend (API Fake)
npx json-server --watch db.json --port 3000

3. Rodar o front-end Angular
npm start


Abra no navegador:

http://localhost:4200

👨‍💻 Desenvolvedores

Denilson

Rafael

Curso: Ciência da Computação
Universidade FUMEC
