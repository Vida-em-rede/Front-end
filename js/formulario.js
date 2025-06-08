document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const duvida = document.getElementById('duvida').value.trim();
    let mensagemErro = '';

    if (!nome) {
      mensagemErro += 'Por favor, preencha o nome.\n';
    } else if (/\d/.test(nome)) { 
      mensagemErro += 'O nome não pode conter números.\n';
    }

    if (!email) {
      mensagemErro += 'Por favor, preencha o e-mail.\n';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      mensagemErro += 'Por favor, insira um e-mail válido.\n';
    }

    if (!numero) {
      mensagemErro += 'Por favor, preencha o número.\n';
    } else if (!/^\d+$/.test(numero)) {
      mensagemErro += 'O número deve conter apenas dígitos.\n';
    } else if (numero.length !== 11) {
      mensagemErro += 'O número deve conter 11 dígitos.\n';
    }

    if (!duvida) {
      mensagemErro += 'Por favor, preencha sua dúvida.\n';
    }

    if (mensagemErro) {
      alert(mensagemErro);
      event.preventDefault();  
    } else {
      alert('Formulário enviado com sucesso!');
    }
  });

  // sidebar toggle
  const openSidebar = document.getElementById('openSidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  const sidebar = document.getElementById('sidebar');

  openSidebar.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('hidden');
  });
});
