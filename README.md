# Aplicação Learn Panel

## Descrição

Este projeto foi desenvolvido em React para praticar conceitos fundamentais de componentização, troca de dados via props, e o uso de children para criar interfaces dinâmicas e reutilizáveis. A aplicação inclui um formulário validado e a renderização de dados dinâmicos, como uma lista de cursos e conselhos obtidos da [API Advice Slip](https://api.adviceslip.com/).

## Funcionalidades

- **Componente Header**: Exibe uma saudação personalizada ao usuário.
- **Componente Advice**: Obtém e exibe conselhos dinâmicos de uma API externa.
- **Componente CourseList**: Renderiza uma lista de cursos.
- **Componente Form**: Formulário dinâmico com validação de campos.
- **Validação Simples**: O formulário verifica se todos os campos foram preenchidos antes de ser enviado.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **CSS**: Estilização dos componentes.
- **API**: Integração com a [API Advice Slip](https://api.adviceslip.com/) para obter conselhos.

## Instalação

1. Clone o repositório:

    ```
    git clone <link-do-repositório>
    ```
2. Instale as dependências:
    ```
    npm install
    ```
3. Execute o projeto:
    ```
    npm start
    ```
    A aplicação será aberta no seu navegador padrão no endereço http://localhost:3000/.

## Estrutura de Arquivos

```
src/
    components/
        Advice/
        Button/
        Course/
        CourseList/
        Footer/
        Form/
        Header/
        Input/
        Textarea/
    data/
        coursesData.js
App.js
App.css
index.js
```    

## Como Usar

- **Saudação Personalizada**: Ao iniciar a aplicação, insira seu nome para ser saudado pela interface.
- **Lista de Cursos**: Veja a lista de cursos renderizada dinamicamente a partir dos dados do projeto.
- **Conselho Aleatório**: Receba conselhos dinâmicos obtidos da API.
- **Envio de Dúvidas (Formulário Demonstrativo)**: O formulário valida os campos obrigatórios, mas não envia os dados para nenhum servidor. É apenas uma simulação de envio de formulário com validação de campos.