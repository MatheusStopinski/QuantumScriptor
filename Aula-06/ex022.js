const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  btn.classList.add('active');
  
  // Desativar a classe '.btn' após 500ms (meio segundo)
  setTimeout(() => {
    btn.classList.remove('active');
  }, 230);
});


