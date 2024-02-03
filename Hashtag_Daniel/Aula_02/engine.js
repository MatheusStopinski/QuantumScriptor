//       { 
//            OBJETO
//       }
 
//       []   LISTA 

// ------------------------------------------------------------------------------

// 1º fase conhecendo o elemento
const imgVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImg0 = document.getElementById('0-imagem-miniatura');
const miniaturaImg1 = document.getElementById('1-imagem-miniatura');
const miniaturaImg2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, rosaClaro, estelar];
const opcoesTamanho = ['41 mm', '45 mm'];

let imgSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionado = 1;

// 2º fase funcionamento

function trocarImg() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id; //Tem q colocar o .id;
    imgSelecionada = idOpcaoSelecionada.charAt(0);
    imgVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionado].pasta + '/imagem-' + imgSelecionada + '.jpeg';
}

// Da pra utilizar 'onclick' atraves de todas as funções.

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id; //Tem q colocar o .id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionado].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imgVisualizacao.classList.add('caixa-pequena');        
    } else {
        imgVisualizacao.classList.remove('caixa-pequena');        
    }
}

function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id; 
    // querySelector = faça uma seleção de 1 elemento
    
    //Tem q colocar o .id;
    corSelecionado = idOpcaoSelecionada.charAt(0);
    
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionado].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`

    nomeCor.innerText = `Cor - ${opcoesCores[corSelecionado].nome}`

    miniaturaImg0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionado].pasta + '/imagem-0.jpeg';
    miniaturaImg1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionado].pasta + '/imagem-1.jpeg';
    miniaturaImg2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionado].pasta + '/imagem-2.jpeg';

    imgVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionado].pasta + '/imagem-' + imgSelecionada + '.jpeg';
}

// 3º fase chamar pra funcionar

// Chamei varias funções para fazer tudo no onclick la no html.

