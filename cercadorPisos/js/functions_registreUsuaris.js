$(document).ready(function() {
  // Declaració dels elements
  const nom = $("#validationNom");
  const cognoms = $("#validationCognoms");
  const dni = $("#validationDNI");
  const username = $("#validationUsername");
  const email = $("#validationEmail");
  const telefon = $("#validationTelf");

  // Funció general de validació d'inputs
  function validateInput(input, feedbackId, validationFunction, emptyMessage, invalidMessage) {
      const value = input.val().trim();
      if (value === "") {
          input.removeClass("is-valid").addClass("is-invalid");
          $(feedbackId).html(emptyMessage);
      } else if (!validationFunction(value)) {
          input.removeClass("is-valid").addClass("is-invalid");
          $(feedbackId).html(invalidMessage);
      } else {
          input.removeClass("is-invalid").addClass("is-valid");
          $(feedbackId).html("");
      }
  }

  // Funció de validació NIF/NIE
  function validateNIF_NIE(value) {
      const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
      const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
      const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
      const str = value.toUpperCase();

      if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

      const nie = str.replace(/^[X]/, '0').replace(/^[Y]/, '1').replace(/^[Z]/, '2');
      const letter = str.substr(-1);
      const charIndex = parseInt(nie.substr(0, 8)) % 23;

      return validChars.charAt(charIndex) === letter;
  }

  // Funció de validació d'email
  function validateEmail(email) {
      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
  }

  // Funció de validació de telèfon
  function validateTelefon(telefon) {
      const phoneno = /^\d{9}$/;
      return phoneno.test(telefon);
  }

  // Funció de creació de nom d'usuari
  function createUsername(nom, cognoms, dni) {
      cognoms = cognoms.replace(" ", "").toLowerCase();
      let username = nom.charAt(0).toLowerCase() +
                     cognoms.charAt(0).toUpperCase() +
                     cognoms.slice(1, 4).toLowerCase();

      for (let n = 0; n < 8; n += 2) {
          username += dni.charAt(n);
      }
      return username;
  }

  // Validació del formulari al fer submit
  $('#form-user-register').submit(function(e) {
      e.preventDefault();

      validateInput(nom, "#feedbackNom", value => value !== "", "Aquest camp no pot estar buit", "");
      validateInput(cognoms, "#feedbackCognoms", value => value !== "", "Aquest camp no pot estar buit", "");
      validateInput(dni, "#feedbackDNI", validateNIF_NIE, "Aquest camp no pot estar buit", "DNI/NIE incorrecte");
      validateInput(email, "#feedbackEmail", validateEmail, "Aquest camp no pot estar buit", "Email incorrecte");
      validateInput(telefon, "#feedbackTelf", validateTelefon, "Aquest camp no pot estar buit", "Telefon incorrecte");

      if ($(".is-invalid").length === 0) {
          // Enviar el formulari si tots els camps són vàlids
          this.submit();
      }
  });

  // Validació en temps real
  $("input").focusout(function() {
      const input = $(this);
      if (input.is("#validationNom")) {
          validateInput(input, "#feedbackNom", value => value !== "", "Aquest camp no pot estar buit", "");
      } else if (input.is("#validationCognoms")) {
          validateInput(input, "#feedbackCognoms", value => value !== "", "Aquest camp no pot estar buit", "");
      } else if (input.is("#validationDNI")) {
          validateInput(input, "#feedbackDNI", validateNIF_NIE, "Aquest camp no pot estar buit", "DNI/NIE incorrecte");
      } else if (input.is("#validationEmail")) {
          validateInput(input, "#feedbackEmail", validateEmail, "Aquest camp no pot estar buit", "Email incorrecte");
      } else if (input.is("#validationTelf")) {
          validateInput(input, "#feedbackTelf", validateTelefon, "Aquest camp no pot estar buit", "Telefon incorrecte");
      }
  });

  // Generar nom d'usuari al clicar a @
  $("#btnUsername").click(function() {
      const generatedUsername = createUsername(nom.val().trim(), cognoms.val().trim(), dni.val().trim());
      username.val(generatedUsername);
  });
});
