/*--CONSTANTS--*/
const form = document.getElementById("formulariLaia");

const usuariInput = document.getElementById("usuari");
const emailInput = document.getElementById("email");
const contrasenyaInput = document.getElementById("contrasenya");
const contrasenya2Input = document.getElementById("contrasenya2");
const codipInput = document.getElementById("codip");
const codipError = document.getElementById("codipError");

/*--USUARI--*/

document.addEventListener("DOMContentLoaded", function () {
  usuariInput.addEventListener("focusout", function () {
    if (usuariInput.value.trim() === "") {
      usuariInput.style.borderColor = "red";
      document.getElementById("usuariError").innerText =
        "Aquest camp és obligatori";
      document.getElementById("usuariError").style.color = "red";
    } else {
      usuariInput.style.borderColor = "green";
      document.getElementById("usuariError").innerText = "";
    }
  });
});

/*--CORREU--*/

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  emailInput.addEventListener("focusout", function () {
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
      emailInput.style.borderColor = "green";
      document.getElementById("emailError").innerText = "";
    } else {
      emailInput.style.borderColor = "red";
      document.getElementById("emailError").innerText =
        "El correu electronic no és valid";
      document.getElementById("emailError").style.color = "red";
    }
  });
});

/*--CONTRASENYA 1--*/

document.addEventListener("DOMContentLoaded", function () {
  contrasenyaInput.addEventListener("input", function () {
    const password = this.value.trim();
    let errors = [];

    if (password.length < 8 || password.length > 15) {
      errors.push("La contrasenya ha de tenir entre vuit i quinze lletres.");
    }

    if (!/[a-z]/.test(password)) {
      errors.push("La contrasenya ha de tenir una lletra minuscula");
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("La contrasenya ha de tenir una lletra majuscula");
    }

    if (!/[0-9]/.test(password)) {
      errors.push("La contrasenya ha de tenir un dígit numeric.");
    }

    if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
      errors.push("La contrasenya ha de tenir un caracter especial.");
    }

    mostrarErrores(contrasenyaInput, errors);
  });

  function mostrarErrores(input, errors) {
    if (errors.length > 0) {
      input.style.borderColor = "red";
      document.getElementById("contraError").innerText = errors.join(" \n ");
      document.getElementById("contraError").style.color = "red";
    } else {
      input.style.borderColor = "green";
      document.getElementById("contraError").innerText = "";
    }
  }
});

/*--CONTRASENYA 2--*/

document.addEventListener("DOMContentLoaded", function () {
  contrasenya2Input.addEventListener("focusout", function () {
    const password = contrasenyaInput.value.trim();
    const confirmPassword = contrasenya2Input.value.trim();

    if (password === confirmPassword && confirmPassword !== "") {
      contrasenya2Input.style.borderColor = "green";
      document.getElementById("contra2Error").innerText = "";
    } else {
      contrasenya2Input.style.borderColor = "red";
      document.getElementById("contra2Error").innerText =
        "Les contrasenyes no coincideixen";
      document.getElementById("contra2Error").style.color = "red";
    }
  });
});

/*--CODI POSTAL--*/
document.addEventListener('DOMContentLoaded', function() {

  form.addEventListener('submit', function(event) {
    if (adrecaInput.value.trim() === '') {
      event.preventDefault(); 
      codipError.innerText = 'La dirección postal es obligatoria';
    } else {
      codipError.innerText = ''; 
    }
  });

  codipInput.addEventListener('focusout', function() {
    if (codipInput.value.trim() === '') {
      codipInput.style.borderColor = 'red';
      document.getElementById('codipError').innerText = 'Aquest camp és obligatori';
      document.getElementById('codipError').style.color = 'red';
    } else {
      codipInput.style.borderColor = 'green';
      document.getElementById('codipError').innerText = '';
    }
  });
});

function validateForm() {

  if (usuariInput.value.trim() === '') {
    document.getElementById('usuariError').innerText = 'Aquest camp és obligatori';
    return false;
  }

  if (emailInput.value.trim() === '') {
    document.getElementById('emailError').innerText = 'Aquest camp és obligatori';
    return false;
  }

  if (contrasenyaInput.value.trim() === '') {
    document.getElementById('contraError').innerText = 'Aquest camp és obligatori';
    return false;
  }

  if (contrasenya2Input.value.trim() === '') {
    document.getElementById('contra2Error').innerText = 'Aquest camp és obligatori';
    return false;
  }

  if (contrasenyaInput.value !== contrasenya2Input.value) {
    document.getElementById('contra2Error').innerText = 'Les contrasenyes no coincideixen';
    return false;
  }

  if (codipInput.value.trim() === '') {
    document.getElementById('codipError').innerText = 'Aquest camp és obligatori';
    return false;
  }

  return true;
}

