var now = new Date()
var today = now.getDay()
console.log();
console.log(`O dia da semana é:\n`) // \n para pular linha

switch(today) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: 
        console.log('Indefenido')
        break
}
console.log();