# Projeto de Testes Automatizados para o The Movie DB (TMDB)

Este repositório contém um conjunto de testes de ponta a ponta (E2E) para o site [The Movie DB](https://www.themoviedb.org/), desenvolvidos com o framework Cypress. O objetivo é garantir a qualidade e o funcionamento das principais funcionalidades da plataforma, como login e busca.

## ✨ Principais Tecnologias

-   **Framework de Teste:** [Cypress](https://www.cypress.io/)
-   **Linguagem:** JavaScript
-   **Gerenciador de Pacotes:** [npm](https://www.npmjs.com/)

## 🚀 Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em sua máquina:

-   [Node.js](https://nodejs.org/) (versão 18.x ou superior)
-   [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
-   [Git](https://git-scm.com/)

## ⚙️ Configuração do Ambiente

Siga os passos abaixo para configurar o projeto em seu ambiente local.

### 1. Clonar o Repositório

```bash
git clone [https://github.com/Rafael-netoo/cypress-tests-themoviedb.git](https://github.com/Rafael-netoo/cypress-tests-themoviedb.git)
cd cypress-tests-themoviedb
```

## 🧩 2. Instalar as Dependências

Execute o comando abaixo para instalar o **Cypress** e todas as outras dependências do projeto listadas no `package.json`.

```bash
npm install

```
## 3. Configurar as Credenciais de Acesso (Passo Essencial)

Para executar os testes que exigem autenticação, é necessário criar um arquivo local com suas credenciais.  
Este método garante que **dados sensíveis (como senhas)** nunca sejam enviados para o repositório.

---

### a. Crie o arquivo `cypress.env.json`

Na **raiz do projeto**, crie um novo arquivo com o nome **exato** `cypress.env.json`.

---

### b. Insira suas credenciais

Abra este novo arquivo e adicione o seguinte conteúdo, **substituindo os valores de exemplo** pelas suas informações de login reais do **The Movie DB**.

```json
{
  "TMDB_USER": "seu-usuario-real-aqui",
  "TMDB_PASSWORD": "sua-senha-real-aqui"
}
```
## ▶️ 3. Executando os Testes

Você pode executar os testes de duas maneiras:  
em **modo interativo** (para desenvolvimento) ou em **modo headless** (para execução completa).

---

### 🧭 Modo Interativo (Cypress Test Runner)

Este modo abre a **interface gráfica do Cypress**, permitindo que você veja os testes rodando em tempo real, selecione navegadores e depure com facilidade.  
Ideal para quando você está **escrevendo ou modificando testes**.

```bash
npx cypress open
```



