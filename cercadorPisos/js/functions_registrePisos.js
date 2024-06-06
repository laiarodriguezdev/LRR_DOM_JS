let nom = document.querySelector("#nom");
let preu = document.querySelector("#preu");
let via = document.querySelector("#via");
let nomVia = document.querySelector("#nomVia");
let numeroVia = document.querySelector("#numeroVia");
let pis = document.querySelector("#pis");
let escala = document.querySelector("#escala");
let porta = document.querySelector("#porta");
let cp = document.querySelector("#cp");
let districte = document.querySelector("#districte");
let barri = document.querySelector("#barri");
let poblacio = document.querySelector("#poblacio");
let text = document.querySelector("#text");

let msgNomPis = document.querySelector("#msgnomPis");
let msgDir = document.querySelector("#msgdir");
let msgPreu = document.querySelector("#msgpreu");

$(document).ready(function() {
    // Deshabilitar el select dels barris
    $('#selectBarri').prop('disabled', true);

    // Carregar els districtes dinàmicament
    $('#selectDistricte').change(function() {
        var selectedOption = $(this).children("option:selected").val();
        alert("Seleccionat el districte amb ID: " + selectedOption);

        // Fer una crida AJAX per obtenir els barris basats en el districte seleccionat
        $.ajax({
            url: 'consulta_Barris.php',
            type: 'POST',
            data: { id_districte: selectedOption },
            success: function(response) {
                // Afegir les opcions dels barris al select
                $('#selectBarri').html(response);
                // Habilitar el select dels barris
                $('#selectBarri').prop('disabled', false);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    });
});

function visualitza() {
    console.log("Nom pis:", nom.innerText);
    msgNomPis.innerText = nom.innerText + ' ' + barri.innerText + ', ' + districte.innerText;
    msgDir.innerText = via.textContent + ' ' + nomVia.textContent + ' ' + numeroVia.textContent + ' ' + pis.textContent + ' ' + escala.textContent + ' ' + porta.textContent + ' · ' + cp.value + ' · ' + districte.options[districte.selectedIndex].text + ' · ' + barri.options[barri.selectedIndex].text + ' · ' + poblacio.options[poblacio.selectedIndex].text;
    msgPreu.innerText = preu.textContent + '€';
}