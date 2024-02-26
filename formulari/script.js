/*--CONSTANTS--*/
const usuariInput = document.getElementById("usuari");
const emailInput = document.getElementById("email");
const contrasenyaInput = document.getElementById("contrasenya");
const contrasenya2Input = document.getElementById("contrasenya2");
const codipInput = document.getElementById("codip");

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
      // Limpiar mensaje de error
      document.getElementById("emailError").innerText = "";
    } else {
      emailInput.style.borderColor = "red";
      // Mostrar mensaje de error
      document.getElementById("emailError").innerText =
        "El correu electronic no és valid";
      document.getElementById("emailError").style.color = "red";
    }
  });
});
