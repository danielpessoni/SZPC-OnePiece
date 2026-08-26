/**
 * Troca automática de personagens com controle de inatividade
 * 
 * Regras:
 * - Se não houver clique ou touch dentro de 10 segundos, liga o timer de troca automática;
 * - O timer troca o personagem selecionado a cada 5 segundos;
 * - Se houver clique em um botão ou touch, desliga o timer e reinicia a contagem de inatividade.
 */

const TEMPO_INATIVIDADE = 10000; // 10 segundos sem interação para ativar o timer
const INTERVALO_TROCA = 5000;     // 5 segundos entre cada troca automática

let timerInatividade = null;
let timerTrocaAutomatica = null;

function desselecionarElemento(seletor) {
    const elementoSelecionado = document.querySelector(seletor);
    if (elementoSelecionado) {
        elementoSelecionado.classList.remove('selecionado');
    }
}

function selecionarPersonagemPorIndice(indice) {
    const botoes = document.querySelectorAll('.botao');
    const personagens = document.querySelectorAll('.personagem');

    if (!botoes.length || !personagens.length) return;

    const novoIndice = (indice + botoes.length) % botoes.length;

    desselecionarElemento('.botao.selecionado');
    desselecionarElemento('.personagem.selecionado');

    botoes[novoIndice].classList.add('selecionado');
    personagens[novoIndice].classList.add('selecionado');
}

function trocarParaProximoPersonagem() {
    const botoes = document.querySelectorAll('.botao');
    const indiceAtual = Array.from(botoes).findIndex(botao => 
        botao.classList.contains('selecionado')
    );

    const proximoIndice = indiceAtual === -1 ? 0 : (indiceAtual + 1) % botoes.length;
    selecionarPersonagemPorIndice(proximoIndice);
}

function ligarTimerTroca() {
    if (timerTrocaAutomatica) return;

    // Inicia a troca cíclica a cada 5 segundos
    timerTrocaAutomatica = setInterval(() => {
        trocarParaProximoPersonagem();
    }, INTERVALO_TROCA);
}

function desligarTimerTroca() {
    if (timerTrocaAutomatica) {
        clearInterval(timerTrocaAutomatica);
        timerTrocaAutomatica = null;
    }
}

function registrarInteracaoUsuario() {
    // Ao detectar clique ou touch: desliga o timer de troca e reinicia a espera de 10 segundos
    desligarTimerTroca();

    if (timerInatividade) {
        clearTimeout(timerInatividade);
    }

    timerInatividade = setTimeout(() => {
        ligarTimerTroca();
    }, TEMPO_INATIVIDADE);
}

export function iniciarTrocaAutomatica() {
    const eventosInteracao = ['click', 'touchstart', 'touchmove', 'pointerdown', 'keydown'];

    eventosInteracao.forEach(evento => {
        window.addEventListener(evento, registrarInteracaoUsuario, { passive: true });
    });

    // Inicia a contagem de inatividade inicial (10s após o carregamento)
    registrarInteracaoUsuario();
}