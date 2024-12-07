document.addEventListener('DOMContentLoaded', () => {
  const confirmarBtn = document.querySelector('#confirmar-objecao');

  if (confirmarBtn) {
      confirmarBtn.addEventListener('click', () => {
          // Obtém o valor do campo de entrada (input)
          const objecaoTexto = document.querySelector('input[type="text"]').value;

          if (objecaoTexto) {
              localStorage.setItem('objecao', objecaoTexto);
              window.location.href = '/html/geradorDescricao.html';
          } else {
              alert('Por favor, insira uma objeção.');
          }
      });
  } else {
      console.error("Elemento com id 'confirmar-objecao' não encontrado.");
  }
});
