document.addEventListener("DOMContentLoaded", function() {
    const pokemons = document.querySelectorAll('.pokedex');
    const pokemonDetails = document.querySelectorAll('.descritivo li');
    const botao = document.querySelectorAll('button');

    pokemonDetails.forEach(detail => { // detail = epresenta cada elemento da lista de detalhes dos Pokédex
        detail.style.display = 'none';
    });

    pokemons.forEach((pokemon, index) => {
           pokemon.addEventListener('click', function() {
            // Oculta todos os descritivos
            pokemonDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            // tira os pokedex
            pokemons.forEach(pokemon => {
                pokemon.style.display = 'none';
            });

            // Exibe apenas o detalhe do descritivo específico que foi clicado
            pokemonDetails[index].style.display = 'flex';
        });
    });

    botao.forEach(button => {
        button.addEventListener('click', function() {
            // Oculta o detalhe do Pokédex ao clicar no botão "X"
            pokemonDetails.forEach(detail => {
                detail.style.display = 'none';
            });    
            // Exibe todos os Pokédex novamente
            pokemons.forEach(pokemon => {
                pokemon.style.display = 'flex';
            });
        });
    });


});


