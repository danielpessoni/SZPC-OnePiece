/**
 * Carrossel com navegação por Touch e Ocultação de Botões
 * 
 * Regras:
 * - Se for detectado dispositivo com touch, oculta a barra de botões (.botoes);
 * - Movimento da esquerda para direita (swipe right): retrocede o personagem (anterior);
 * - Movimento da direita para a esquerda (swipe left): avança o personagem (próximo);
 * - Navegação circular: retroceder no primeiro exibe o último / avançar no último retorna ao primeiro.
 */

const DISTANCIA_MINIMA_SWIPE = 40; // Distância mínima em pixels para validar o gesto

let touchStartX = 0;
let touchStartY = 0;

function dispositivoPossuiTouch() {
    return (
        window.matchMedia('(pointer: coarse)').matches ||
        ('ontouchstart' in window && navigator.maxTouchPoints > 0) ||
        navigator.maxTouchPoints > 0
    );
}

function atualizarExibicaoBotoes() {
    const containerBotoes = document.querySelector('.botoes');
    if (!containerBotoes) return;

    if (dispositivoPossuiTouch()) {
        containerBotoes.style.display = 'none';
    } else {
        containerBotoes.style.display = '';
    }
}

function desselecionarElemento(seletor) {
    const elementoSelecionado = document.querySelector(seletor);
    if (elementoSelecionado) {
        elementoSelecionado.classList.remove('selecionado');
    }
}

function obterIndiceAtual() {
    const personagens = document.querySelectorAll('.personagem');
    const indice = Array.from(personagens).findIndex(personagem =>
        personagem.classList.contains('selecionado')
    );
    return indice === -1 ? 0 : indice;
}

function selecionarPersonagemPorIndice(indice) {
    const botoes = document.querySelectorAll('.botao');
    const personagens = document.querySelectorAll('.personagem');

    if (!personagens.length) return;

    const total = personagens.length;
    const indiceNormalizado = ((indice % total) + total) % total;

    desselecionarElemento('.botao.selecionado');
    desselecionarElemento('.personagem.selecionado');

    if (botoes[indiceNormalizado]) {
        botoes[indiceNormalizado].classList.add('selecionado');
    }
    if (personagens[indiceNormalizado]) {
        personagens[indiceNormalizado].classList.add('selecionado');
    }
}

function avancarPersonagem() {
    const total = document.querySelectorAll('.personagem').length;
    if (!total) return;
    const indiceAtual = obterIndiceAtual();
    const proximoIndice = (indiceAtual + 1) % total;
    selecionarPersonagemPorIndice(proximoIndice);
}

function retrocederPersonagem() {
    const total = document.querySelectorAll('.personagem').length;
    if (!total) return;
    const indiceAtual = obterIndiceAtual();
    const indiceAnterior = (indiceAtual - 1 + total) % total;
    selecionarPersonagemPorIndice(indiceAnterior);
}

function tratarTouchStart(evento) {
    if (evento.touches && evento.touches.length === 1) {
        touchStartX = evento.touches[0].clientX;
        touchStartY = evento.touches[0].clientY;
    }
}

function tratarTouchEnd(evento) {
    if (!evento.changedTouches || evento.changedTouches.length === 0) return;

    const touchEndX = evento.changedTouches[0].clientX;
    const touchEndY = evento.changedTouches[0].clientY;

    const diferencaX = touchEndX - touchStartX;
    const diferencaY = touchEndY - touchStartY;

    // Garante que o movimento horizontal foi mais expressivo que o vertical
    if (Math.abs(diferencaX) > Math.abs(diferencaY) && Math.abs(diferencaX) >= DISTANCIA_MINIMA_SWIPE) {
        if (diferencaX > 0) {
            // Esquerda para a direita: Retroceder
            retrocederPersonagem();
        } else {
            // Direita para a esquerda: Avançar
            avancarPersonagem();
        }
    }
}

function tratarNavegacaoTeclado(evento) {
    // Seta para direita ou para baixo: avança o personagem
    if (evento.key === 'ArrowRight' || evento.key === 'Right' || evento.key === 'ArrowDown' || evento.key === 'Down') {
        avancarPersonagem();
    }
    // Seta para esquerda ou para cima: retrocede o personagem
    else if (evento.key === 'ArrowLeft' || evento.key === 'Left' || evento.key === 'ArrowUp' || evento.key === 'Up') {
        retrocederPersonagem();
    }
}

export function configurarCarrossel() {
    // 1. Atualiza dinamicamente a exibição dos botões conforme disponibilidade de touch
    atualizarExibicaoBotoes();

    // Reavalia exibição ao redimensionar tela ou alterar dispositivo/ponteiro
    window.addEventListener('resize', atualizarExibicaoBotoes);
    const mediaPointerCoarse = window.matchMedia('(pointer: coarse)');
    if (mediaPointerCoarse.addEventListener) {
        mediaPointerCoarse.addEventListener('change', atualizarExibicaoBotoes);
    }

    // 2. Registra os ouvintes de toque na janela para transição por gestos
    window.addEventListener('touchstart', tratarTouchStart, { passive: true });
    window.addEventListener('touchend', tratarTouchEnd, { passive: true });

    // 3. Registra ouvinte para navegação por teclado (setas)
    window.addEventListener('keydown', tratarNavegacaoTeclado);
}
