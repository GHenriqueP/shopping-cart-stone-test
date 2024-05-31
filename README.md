# Stone Shopping Cart App

Bem-vindo ao projeto de frontend desenvolvido para o teste da empresa Stone. Este projeto consiste em um aplicativo de venda de produtos, utilizando a [Fake Store API](https://fakestoreapi.com/) para listar produtos. Abaixo você encontrará detalhes sobre a configuração e funcionalidades do projeto.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Comandos Disponíveis](#comandos-disponíveis)

## Visão Geral

Este projeto foi desenvolvido com o objetivo de fornecer uma interface de usuário intuitiva para listar, buscar, adicionar e remover produtos de um carrinho de compras. O foco principal foi a aplicação de boas práticas de desenvolvimento, como o uso de Clean Code e Conventional Commits.

## Funcionalidades

- **Listagem de Produtos**: Exibe uma lista de produtos obtidos da Fake Store API.
- **Barra de Pesquisa**: Permite buscar produtos por nome.
- **Carrinho de Compras**: Adiciona e remove produtos do carrinho.
- **Documentação de Componentes**: Documentação de componentes com Storybook.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento web.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **Storybook**: Ferramenta para desenvolvimento e documentação de componentes de UI.
- **Material Icons**: Conjunto de ícones da Google.
- **Context API**: Para gerenciamento de estado global.
- **Clean Code**: Princípios para escrever código claro e de fácil manutenção.
- **Conventional Commits 1.0.0**: Convenção para mensagens de commit.

## Instalação

Siga os passos abaixo para configurar o projeto em seu ambiente local:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/GHenriqueP/stone-product-sales-app.git
   cd stone-product-sales-app
   ```

1. **Instale as dependências:**

   ```bash
   yarn install
   ```

## Como Usar

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

```bash
yarn dev
```

Abra o navegador e acesse http://localhost:3000 para ver a aplicação em execução.

## Comandos Disponíveis

1. **Iniciar o servidor de desenvolvimento:**

   ```bash
   yarn dev
   ```

2. **Build para produção:**

   ```bash
   yarn build
   ```

3. **Iniciar o servidor em modo produção:**

   ```bash
   yarn start
   ```

4. **Executar o Storybook:**

   ```bash
   yarn storybook
   ```
