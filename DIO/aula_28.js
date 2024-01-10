// new Promise((resolve, reject) => {                                  A PROMESSA
    
// })

// setTimeout(() => {                                       CONTAR TEMPO ANTES DE EXECUTAR!
//     const numero = parseInt(Math.random() * 100)
//     resolve (numero)
// }, 1000)


const promessaFeita = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve (numero)
    }, 1000)
})


promessaFeita
    .then((value) => {                        // DA PRA CRIAR VARIOS ==> .THEN
        console.log(value);                   // AQUI ELE JA EXECUTA O VALOR
        return value + 10                     // NOVA FORMULA QUE SERA SO MOSTRADO NO OUTRO
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
    console.error(error);
    })
    .finally(() => {
        console.log('Finalizou!');
    })