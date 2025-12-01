# 🚀 Anotações Instantâneas (ou o título que você escolheu)

Uma aplicação de notas em tempo real desenvolvida com ReactJS, demonstrando o uso eficiente do Local Storage para persistência de dados (CRUD completo).

---

## ✨ Funcionalidades

* **Persistência de Dados:** As notas são salvas e carregadas usando o Local Storage do navegador, garantindo que os dados permaneçam mesmo após fechar a aplicação.
* **CRUD Completo:**
    * **Criar:** Adicione novas notas através de um formulário simples.
    * **Ler:** Visualize todas as notas em um layout de grid responsivo.
    * **Atualizar (Editar):** Modifique o conteúdo de uma nota existente.
    * **Deletar:** Remova notas individualmente.
* **Tempo Real:** As mudanças de estado são renderizadas instantaneamente pelo React.
* **Arquitetura Limpa:** Utilização de Custom Hooks (`useNotes.js`) para isolar a lógica de estado e persistência, mantendo o componente principal (`App.jsx`) focado apenas na renderização.

---

## 🛠️ Tecnologias Utilizadas

* **ReactJS** (Com Hooks: `useState`, `useEffect`)
* **Local Storage API**
* **JavaScript** (ES6+)
* **CSS Puro** (Com Media Queries para responsividade)

---

## ⚙️ Como Rodar o Projeto Localmente

Siga estas instruções para configurar e rodar a aplicação em sua máquina.

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** (ou yarn) instalados.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github](https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd seu-projeto-react
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou yarn install
    ```

### Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou npm start
