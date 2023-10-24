var now = new Date()
var horas = now.getHours()
console.log(`Agora são exatamente ${horas} horas`);

if (horas < 12 && horas > 5) {
    console.log('Acorde bem. Bom Dia!');
} else if (horas >= 12 && horas < 18)
console.log('Boa tarde, faça coisas o tempo passa rapido!');
 else if (horas >= 18 && horas <= 24) {
    console.log('Boa noite. Muita Luz');
 } else if (horas >= 1 && horas <= 5) {
    console.log('Boa Madrugada. Muita força e Luz!');
} else {
    console.log('Horário indefenido');    
}