# Lista de Notas e Anotações

## Descrição do tema
Esta aplicação permite adicionar, editar e remover itens de uma lista e foi feita para ser utilizada como uma Lista de Notas e Anotações, permitindo ao usuário adicionar textos de diversos tamanhos, mantendo a aplicação renponsiva em qualquer dispositivo, e numerar cada item conforme sua ordem de criação.

## Explicando os Componentes

### 1. FormularioNota
- Componente para o formulário de adicionar notas. Gerencia o estado da nova nota e a função de envio do formulário. É chamado dentro do `App` para adicionar novas notas à lista.

### 2. ItemNota
- Componente para cada nota individual. Permite edição, remoção e exibição da nota, controlando o estado de edição e indicando se foi editada. É chamado dentro do `App` para renderizar cada nota da lista.

### 3. ListaNotas
- Componente que renderiza a lista de notas. Utiliza `ItemNota` para exibir cada nota. É chamado dentro do `App` para exibir todas as notas adicionadas.

### 4. App
- Componente principal que gerencia o estado da lista de notas. Adiciona, remove e atualiza notas, renderizando `FormularioNota` e `ListaNotas`. Este componente integra `FormularioNota`, `ItemNota` e `ListaNotas` para criar a funcionalidade completa da aplicação.

## Tecnologias Utilizadas
- React
- CSS
- GitBash

## Instruções de Instalação
1. Clone o repositório no GitBash da sua Área de Trabalho:
   ```bash
   git clone https://github.com/m1dni9hts/Trabalho-de-React.git
2. Entre na pasta do repositório:
   ```bash
   cd Trabalho-de-React
3. Instale o node_modules:
   ```bash
   npm i
4. Rode a aplicação:
   ```bash
   npm start
