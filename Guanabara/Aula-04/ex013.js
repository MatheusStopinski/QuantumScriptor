function contar() {
    
let inicio = window.document.querySelector('input#_nbsp')
let fim = window.document.querySelector('input#nbsp')
let passo = window.document.querySelector('input#passo')
var contagem = window.document.querySelector('p.contagem')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) { 
    alert('[ERRO] Faltam informações!')
} else {
    contagem.innerHTML = 'Contando... <br> <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if ( p <= 0 ) {
    window.alert('Contagem inválida - CONSIDERANDO PASSO 1')
    p = 1

    } if (i < f) {

        for (let c = i; c <= f; c += p) {
            contagem.innerHTML += ` ${c} \u{1F449}`      
        }  

    } else {

        for (let c = i; c>= f; c -= p) {
            contagem.innerHTML += ` ${c} \u{1F449}`      
        }
    } 
    contagem.innerHTML += `\u{1F3C1}`    
 
}
}