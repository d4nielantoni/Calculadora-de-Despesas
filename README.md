# Gastômetro

Esta é uma aplicação simples para calcular despesas e renda pessoal. Com base nas informações fornecidas pelo usuário, a calculadora apresenta o saldo restante após deduzir as despesas. Além disso, exibe gráficos de barras e pizza para visualizar os gastos em diferentes categorias.

---

## Funcionalidades

- **Cadastro de Informações**: O usuário pode fornecer seu nome e renda mensal, além de inserir os valores das despesas em categorias como luz, água, telefone, transporte e alimentação.
  
- **Cálculo de Despesas e Saldo**: Com base nas informações fornecidas, a aplicação calcula o total das despesas e o saldo restante após deduzir essas despesas da renda mensal.

- **Visualização Gráfica**: Além dos resultados numéricos, a aplicação também apresenta gráficos de barras e pizza para visualizar os gastos em diferentes categorias.

- **Limpar Campos**: Há uma opção para limpar todos os campos e recomeçar o processo de entrada de dados.

---

## Como usar

1. Preencha seu nome e sua renda mensal nos campos designados.
2. Insira o valor das despesas nas categorias correspondentes.
3. Clique no botão "Calcular" para ver os resultados.
4. Se desejar, utilize o botão "Limpar" para limpar todos os campos e recomeçar (irá dar um refresh na página)

---

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página web.
- **CSS3**: Estilização dos elementos e layout da página.
- **JavaScript**: Lógica de programação para cálculos e interatividade.
- **Chart.js**: Biblioteca para criar gráficos interativos.

---

## Estrutura do Projeto

- **index.html**: Arquivo principal contendo a estrutura da página.
- **styles.css**: Arquivo de estilo para estilização da página.
- **script.js**: Arquivo de script contendo a lógica de cálculo e interatividade.
- **assets/**:
  - **styles.css**: Estilos adicionais para a aplicação.
  - **script.js**: Scripts adicionais para funcionalidades específicas.
  - **Chart.js**: Biblioteca Chart.js para criação de gráficos.

---

## Explicação JavaScript
- **Função calcularSaldo()**:  é acionada quando o botão "Calcular" é clicado na interface. Ela coleta os valores dos 
campos de entrada, verifica se todos os campos estão preenchidos, converte esses valores para números, calcula o total 
das despesas e o saldo restante, exibe os resultados na página e cria gráficos de barras e pizza para visualizar os gastos 
em diferentes categorias.

---

- **Função limparCampos()**: é acionada quando o botão "Limpar" é clicado. Ela simplesmente recarrega a página para limpar 
todos os campos e permitir que o usuário comece um novo cálculo.

---

