# 🏴‍☠️ SZPC - One Piece Crew Gallery

Galeria interativa desenvolvida a partir do projeto prático apresentado pelos mentores da escola **Dev em Dobro** no curso **DevQuest** durante a *Semana do Zero ao Programador Contratado*. A aplicação centraliza e exibe informações detalhadas sobre os principais integrantes da tripulação dos Piratas do Chapéu de Palha.

---

## 🕹️ Funções Existentes

O projeto opera como uma interface dinâmica baseada em eventos do usuário, contendo as seguintes funcionalidades:

*   **Alternância de Estados Dinâmica:** Atualização síncrona da interface ao clique do usuário, modificando simultaneamente o plano de fundo, o título e a descrição textual do personagem selecionado.
*   **Menu de Navegação Vertical/Horizontal:** Barra de seleção contendo os ícones da tripulação, que se adapta dinamicamente à orientação da tela.
*   **Feedback Visual Ativo:** Destaque visual imediato no ícone do personagem atualmente selecionado através de transformações de escala e sombreamento.

---

## 💻 Recursos de Código

A lógica de funcionamento e a estrutura visual foram implementadas através de padrões limpos de manipulação nativa:

*   **Manipulação Eficiente do DOM:** Centralização do controle de eventos utilizando `querySelectorAll` combinando o `forEach` com o mapeamento por `índice`, evitando a replicação desnecessária de ouvintes de evento.
*   **Encapsulamento de Comportamentos:** Isolamento de responsabilidades no JavaScript através de funções declarativas focadas em limpar os estados anteriores (`desselecionarBotao` e `desselecionarPersonagem`).
*   **Camada Visual Modular:** Separação rígida de escopos CSS utilizando arquivos específicos para normalização (`reset.css`), regras estruturais de layout (`estilos.css`) e regras de adaptação de tela (`responsivo.css`).

---

## 🛠️ Stacks Utilizadas

*   **HTML5:** Estruturação semântica da aplicação.
*   **CSS3:** Posicionamento absoluto, pseudo-elementos (`::after`) para máscaras de gradiente, efeitos de transição/escala e Media Queries para adaptação de tela.
*   **JavaScript (Vanilla JS):** Lógica nativa para comportamento e reatividade client-side.

---

## 🎯 Foco no Projeto

O principal objetivo técnico deste desenvolvimento está focado em **interatividade client-side pura** e **responsividade de interface**. 

A arquitetura visual foi desenhada para priorizar a experiência imersiva do usuário, utilizando técnicas de sobreposição de elementos em tela cheia (`100vh`), mantendo o foco total na transição fluida entre os conteúdos e na reorganização dos elementos de navegação para dispositivos móveis (redimensionando grades de botões de verticais para horizontais em telas menores).
