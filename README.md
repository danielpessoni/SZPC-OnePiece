# 🏴‍☠️ SZPC - One Piece Crew Gallery

Galeria interativa desenvolvida a partir do projeto prático apresentado pelos mentores da escola **Dev em Dobro** no curso **DevQuest** durante a *Semana do Zero ao Programador Contratado*. A aplicação centraliza e exibe informações detalhadas sobre os principais integrantes da tripulação dos Piratas do Chapéu de Palha.

---

## 🕹️ Funções Existentes

O projeto opera como uma interface dinâmica baseada em eventos do usuário, contendo as seguintes funcionalidades:

* **Alternância de Estados Dinâmica:** Atualização síncrona da interface ao interagir com a aplicação, modificando simultaneamente o plano de fundo, o título e a descrição textual do personagem selecionado.
* **Menu de Navegação Vertical/Horizontal:** Barra de seleção contendo os ícones da tripulação, que se adapta dinamicamente à orientação da tela e é ocultada automaticamente em dispositivos com suporte a touch.
* **Navegação por Touch (Swipe):** Em dispositivos com tela sensível ao toque, é possível avançar ou retroceder entre os personagens através de gestos horizontais de swipe.
* **Navegação por Teclado:** Utilização das teclas de seta para direita/baixo para avançar e esquerda/cima para retroceder entre os personagens.
* **Carrossel Circular:** A navegação permite percorrer os personagens continuamente, retornando ao primeiro personagem ao avançar a partir do último ou ao último ao retroceder a partir do primeiro.
* **Troca Automática por Inatividade:** Após 10 segundos sem interação do usuário, a aplicação inicia automaticamente a troca dos personagens a cada 5 segundos.
* **Controle de Interação:** Qualquer clique, toque, movimento, interação com ponteiro ou tecla pressionada interrompe a troca automática e reinicia a contagem de 10 segundos de inatividade.
* **Feedback Visual Ativo:** Destaque visual imediato no ícone do personagem atualmente selecionado através de transformações de escala e sombreamento.

---

## 💻 Recursos de Código

A lógica de funcionamento e a estrutura visual foram implementadas através de padrões limpos de manipulação nativa:

* **Manipulação Eficiente do DOM:** Centralização do controle de eventos utilizando `querySelectorAll`, combinando o `forEach` com o mapeamento por `índice`, permitindo relacionar os botões aos respectivos personagens sem a replicação desnecessária de código.
* **Encapsulamento de Comportamentos:** Isolamento de responsabilidades no JavaScript através de funções declarativas focadas em selecionar e limpar os estados anteriores, como `desselecionarBotao`, `desselecionarPersonagem` e `selecionarPersonagemPorIndice`.
* **Arquitetura JavaScript Modular:** Organização da lógica em módulos independentes através dos arquivos `index.js`, `seletor.js`, `timer.js` e `carrossel.js`, facilitando a separação e manutenção das diferentes responsabilidades da aplicação.
* **Navegação por Eventos:** Utilização de eventos de `click`, `touchstart`, `touchend`, `touchmove`, `pointerdown`, `keydown` e `resize` para controlar diferentes formas de interação com a interface.
* **Detecção de Dispositivos Touch:** Identificação de dispositivos com suporte a toque através de `matchMedia`, `ontouchstart` e `navigator.maxTouchPoints`, permitindo adaptar automaticamente a navegação da aplicação.
* **Controle de Temporizadores:** Utilização de `setTimeout`, `setInterval`, `clearTimeout` e `clearInterval` para controlar a espera por inatividade e a troca automática dos personagens.
* **Camada Visual Modular:** Separação rígida de escopos CSS utilizando arquivos específicos para normalização (`reset.css`), regras estruturais de layout (`estilos.css`) e regras de adaptação de tela (`responsivo.css`).

---

## 🛠️ Stacks Utilizadas

* **HTML5:** Estruturação semântica da aplicação.
* **CSS3:** Posicionamento absoluto, pseudo-elementos (`::after`) para máscaras de gradiente, efeitos de transição/escala e Media Queries para adaptação de tela.
* **JavaScript (Vanilla JS):** Lógica nativa para comportamento, interatividade, navegação por diferentes dispositivos e reatividade client-side.
* **JavaScript Modules (ES Modules):** Organização do código em módulos independentes, importados através de `type="module"`.
* **Google Fonts:** Utilização das fontes **Rubik** e **Secular One** para composição da identidade visual da aplicação.

---

## 🎯 Foco no Projeto

O principal objetivo técnico deste desenvolvimento está focado em **interatividade client-side pura**, **responsividade de interface** e **diferentes formas de interação com o usuário**.

A arquitetura visual foi desenhada para priorizar a experiência imersiva do usuário, utilizando técnicas de sobreposição de elementos em tela cheia (`100vh`), mantendo o foco total na transição fluida entre os conteúdos e na reorganização dos elementos de navegação para dispositivos móveis.

Além da seleção tradicional através dos botões, a aplicação conta com **navegação por gestos de touch e teclado**, **carrossel circular** e **troca automática dos personagens após um período de inatividade**, proporcionando uma experiência de navegação mais dinâmica e adaptável a diferentes dispositivos.

## 🎯 Os mentores

O projeto foi desenvolvido no evento **Semana do Zero ao Programador Contratado**, da escola **Dev em Dobro** e o repositório dos mentores pode ser acessado ao clicar [AQUI](https://github.com/devemdobro/projeto-one-piece-final)