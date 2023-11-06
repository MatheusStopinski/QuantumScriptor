const btn = document.querySelector('.btn');
let num = document.querySelector('input#between')
let list = document.querySelector('select#seld')
let resul = document.querySelector('div.resul')
let values = []

function add() {
  if (isNumber(num.value) && !inList(num.value, values)) {
    values.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Value ${num.value} add`    
    list.appendChild(item) 
    resul.innerHTML = ''   
  } else {
    alert('Valor inválido ou já encontrado.')
  }
  num.value = ''
  num.focus()
  
}

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}
function inList(n, l) {
  if (l.indexOf(Number(n)) !== -1) {
    return true
  } else {
    return false
  }
}

function finish() {
  if (values.length == 0) {
    alert('Invalid value, add some number.');
  } else {
    let total = values.length;
    let maior = values[0];
    let menor = values[0];
    let soma = 0;
    for (let pos in values) {
      soma += values[pos];
      if (values[pos] > maior) 
        maior = values[pos];
      if (values[pos] < menor)
        menor = values[pos];
    }

    resul.innerHTML = '';

    let message1 = document.createElement('p');
    message1.textContent = `In all, we have ${total} registered numbers.`;

    let message2 = document.createElement('p');
    message2.textContent = `The highest value reported was ${maior}`;

    let message3 = document.createElement('p');
    message3.textContent = `The lowest value reported was ${menor}`;

    let message4 = document.createElement('p');
    message4.textContent = `Adding all the values we have ${soma}`;

    message1.style.position = 'absolute';
    message1.style.left = '75%'; 
    message1.style.top = '50%'; 
    message1.style.transform = 'translate(-50%, -50%)'; 
    message1.style.whiteSpace = 'nowrap'; 

    message2.style.position = 'absolute';
    message2.style.left = '75%'; 
    message2.style.top = '57%'; 
    message2.style.transform = 'translate(-50%, -50%)'; 
    message2.style.whiteSpace = 'nowrap'; 

    message3.style.position = 'absolute';
    message3.style.left = '75%'; 
    message3.style.top = '64%'; 
    message3.style.transform = 'translate(-50%, -50%)'; 
    message3.style.whiteSpace = 'nowrap'; 

    message4.style.position = 'absolute';
    message4.style.left = '75%'; 
    message4.style.top = '71%'; 
    message4.style.transform = 'translate(-50%, -50%)'; 
    message4.style.whiteSpace = 'nowrap'; 

    resul.appendChild(message1);
    resul.appendChild(message2);
    resul.appendChild(message3);
    resul.appendChild(message4);
  }
}


btn.addEventListener('click', () => {
  btn.classList.add('active');
  
  // Desativar a classe '.btn' após 500ms (meio segundo)
  setTimeout(() => {
    btn.classList.remove('active');
  }, 230);
});




