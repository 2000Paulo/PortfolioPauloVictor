// src/js/contact.js
const form = document.querySelector('#contact form');
const alertBox = document.getElementById('form-alert');

form.addEventListener('submit', async e => {
  e.preventDefault();
  alertBox.textContent = 'Enviando?';
  const formData = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      alertBox.textContent = 'Obrigado! Sua mensagem foi enviada.';
      form.reset();
    } else {
      throw new Error('Erro no envio');
    }
  } catch (err) {
    alertBox.textContent = 'Ops! Algo deu errado. Tente novamente.';
  }
});
