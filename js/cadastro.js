document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value;
    const relato = document.getElementById('relato').value.trim();

    let mensagemErro = '';

    if (!nome) {
      mensagemErro += 'Por favor, preencha o nome.\n';
    } else if (/\d/.test(nome)) {   
      mensagemErro += 'O nome não pode conter números.\n';
    }

    if (!idade) {
      mensagemErro += 'Por favor, preencha a idade.\n';
    } else if (!/^\d+$/.test(idade)) {
      mensagemErro += 'A idade deve conter apenas números.\n';
    } else if (parseInt(idade) > 120) {  // Corrigido teste
      mensagemErro += 'Idade fora dos parâmetros permitidos (máx 120).\n';
    }

    if (!relato) {
      mensagemErro += 'Por favor, preencha seu relato.\n';
    }

    if (mensagemErro) {
      alert(mensagemErro);
      event.preventDefault(); 
    } else {
      alert('Formulário enviado com sucesso!');
    }
  });
});