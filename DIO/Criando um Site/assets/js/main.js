const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url) // get imbutido, fetch() tem um response. POR FIM É ASSINCRONO, DEMORA UM POUCO PRA VIR A RESPOSTA!
.then((response) => response.json()) // AQUI É PARA O SUCESSO. Forma reduzida. 
.then(function (jsonBody) { //AQUI VEM O 'RETORNO DO PRIMEIRO THEN'. Forma normal.
    console.log(jsonBody);
})

.catch(function (error) { // FUNCÇÃO PARA O N SUCESSO
    console.log(error);
})
.finally(function () { //independente dos dois acima    
    console.log('Requisição concluída!');
})
