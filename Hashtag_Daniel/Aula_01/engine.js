// 1º fase conhecendo o elemento

const audioCapitulo = document.getElementById('audio-capitulo')
const playPause = document.getElementById('play-pause')
const avancar = document.getElementById('proximo')
const anterior = document.getElementById('anterior')
const nomeCapitulo = document.getElementById('capitulo')
const numCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;


// 2º fase funcionamento

function tocarFaixa() {
    audioCapitulo.play(); // quando for executar uma ação sempre colocar ()
    playPause.classList.remove('bi-play-circle-fill');
    playPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause(); // quando for executar uma ação sempre colocar ()
    playPause.classList.remove('bi-pause-circle-fill');
    playPause.classList.add('bi-play-circle-fill');
}

function tocarPausar() {
    if (taTocando === 0) {
        tocarFaixa(); 
        taTocando = 1;

    } else {
        pausarFaixa();
        taTocando = 0;

    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual
}

function proximaFaixa() {
    if (capituloAtual === numCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1
    }
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    trocarNomeFaixa();
    taTocando = 1;
}

function faixaAnterior() {
    if (capituloAtual === 1) {
        capituloAtual = 10;
    } else {
        capituloAtual = capituloAtual - 1
    }
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    trocarNomeFaixa();
    taTocando = 1;
}




// 3º fase chamar pra funcionar

playPause.addEventListener('click', tocarPausar);
avancar.addEventListener('click', proximaFaixa);
anterior.addEventListener('click', faixaAnterior);