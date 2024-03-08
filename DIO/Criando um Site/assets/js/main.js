const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonHtml(pokemon) {
    return '<li>
                <span class="nome">${pokemon.name}<span class="number"><b>#001</b></span></span>               
                <img src="https://i.pinimg.com/564x/51/64/42/51644205861f741271891faa6d758768.jpg" alt="${pokemon.name}"/>
            </li>'
        };



fetch(url) // get imbutido, fetch() tem um response. POR FIM É ASSINCRONO, DEMORA UM POUCO PRA VIR A RESPOSTA!
.then((response) => response.json()) // AQUI É PARA O SUCESSO. Forma reduzida. 
.then((jsonBody) => jsonBody.results) 
.then((pokemonLista) => { //AQUI VEM O 'RETORNO DO PRIMEIRO THEN'. Forma normal.
    
    for (let i = 0; i < pokemonLista.length; i++) {
        const pokemon = pokemonLista[i];     
        console.log(convertPokemonHtml(pokemon));   
    }

})
.catch(function (error) { // FUNCÇÃO PARA O N SUCESSO
    console.log(error);
})
.finally(function () { //independente dos dois acima    
    console.log('Requisição concluída!');
})

