function carregar () {
    var text = window.document.getElementById('text')
    var img = window.document.getElementById('photo')    
    var today = new Date ()
    var haours = today.getHours()
    text.innerHTML = `Agora são ${haours} horas.`
    if (haours >= 0 && haours < 12) {
        img.src = '../img/morning.jpg'
        document.body.style.background = "#FFFFF5"
        photo.style.marginTop = "-32px";q
        img.src = '../img/afternoon.jpg'
        photo.style.marginTop = "-32px";
        photo.style.width = "450px";
        photo.style.height = "450px";
        photo.style.borderRadius = "50%";
        photo.style.transform = "scale(0.8)";
        photo.style.position = "relative";
        photo.style.border = "2px ridge white";
        document.body.style.background = "#E2C79C"
    } else {
        img.src = '../img/night.jpg'
        photo.style.marginTop = "-32px";
        photo.style.width = "450px";
        photo.style.height = "450px";
        photo.style.borderRadius = "50%";
        photo.style.transform = "scale(0.8)";
        photo.style.position = "relative";
        photo.style.border = "2px ridge white";
    }
}
// Eu sei precisa nem falar, apenas quis ver outro caminho
