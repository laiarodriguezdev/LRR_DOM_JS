  document.addEventListener('DOMContentLoaded', function() {
    const usuariInput = document.getElementById('usuari');
  
    usuariInput.addEventListener('focusout', function() {
      if (usuariInput.value.trim() === '') {
        usuariInput.style.borderColor = 'red';
      } else {
        usuariInput.style.borderColor = 'green';
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
  
    emailInput.addEventListener('focusout', function() {
      const email = emailInput.value.trim();
      if (validateEmail(email)) {
        emailInput.style.borderColor = 'green';
        document.getElementById('emailError').innerText = '';
      } else {
        emailInput.style.borderColor = 'red';
        document.getElementById('emailError').innerText = 'Error en el correo electrónico';
        document.getElementById('emailError').style.color = 'red';
      }
    });
  });
  