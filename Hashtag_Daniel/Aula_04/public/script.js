const botaoEnviar = document.getElementById('enviar');
const inputTexto = document.getElementById('texto');
const socket = io();
const chat = document.getElementById('mensagens');

botaoEnviar.addEventListener('click', () => {
    if (inputTexto.valeu !== "") {
        socket.emit('nova mensagem', inputTexto.value);
        inputTexto.valeu = "";
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg; // textContent é uma caracteristica do <li>
    elementoMensagem.classList.add('mensagem'); // estilizei com uma class
    chat.appendChild(elementoMensagem); //pegou os filhos das msgs ou seja o id que tem mensagem.
})
