document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll('.question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const card = q.closest('.card'); // Encontra o card pai
      const answer = card.querySelector('.answer'); // Busca a resposta dentro do mesmo card
      const isOpen = answer.classList.contains('active');

      // Fecha todas as respostas primeiro
      document.querySelectorAll('.answer').forEach(a => {
        if (a !== answer) { // Não fecha a resposta atual se já estiver aberta
          a.classList.remove('active');
          a.style.maxHeight = null;
          a.style.paddingTop = '0';
          a.style.paddingBottom = '0';
        }
      });

      // Alterna o estado da resposta clicada
      if (!isOpen) {
        answer.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.paddingTop = '20px';
        answer.style.paddingBottom = '20px';
      } else {
        answer.classList.remove('active');
        answer.style.maxHeight = null;
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';
      }
    });
  });
});