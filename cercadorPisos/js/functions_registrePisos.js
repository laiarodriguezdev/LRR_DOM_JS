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

// function visualitza() {
//     console.log("Nom pis:", nom.value);
//     msgNomPis.innerText = nom.value + ' ' + barri.value + ', ' + districte.value;
//     msgDir.innerText = via.value + ' ' + nomVia.value + ' ' + numeroVia.value + ' ' + pis.value + ' ' + escala.value + ' ' + porta.value + ' · ' + cp.value + ' · ' + districte.options[districte.selectedIndex].text + ' · ' + barri.options[barri.selectedIndex].text + ' · ' + poblacio.options[poblacio.selectedIndex].text;
//     msgPreu.innerText = preu.value + '€';
// }

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