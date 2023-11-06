const btn = document.querySelector('.btn');
let num = document.querySelector('input#between')
let list = document.querySelector('select#seld')
let resul = document.querySelector('div.resul')
let values = []

function add() {
  if (isNumber(num.value) && !inList(num.value, values)) {
    
  } else {
    alert('Valor inválido ou já encontrado.')
  }
}

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}
function inList(n) {
  if (l.indexOf(Number(n)) !== -1) {
    return true
  } else {
    return false
  }
}


btn.addEventListener('click', () => {
  btn.classList.add('active');
  
  // Desativar a classe '.btn' após 500ms (meio segundo)
  setTimeout(() => {
    btn.classList.remove('active');
  }, 230);
});




