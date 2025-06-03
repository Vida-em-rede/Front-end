document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll('.question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.paddingTop = '20px';
        answer.style.paddingBottom = '20px';
      }
    });
  });
});