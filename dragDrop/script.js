let arrayDocuments=[];

const dropArea = document.querySelector('.dropArea');
const dragDropText = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.querySelector('#input-file');
const preview = document.querySelector('#preview');

const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];


//PER DESACTIVAR EL DRAG-DROP X DEFECTE
['dragover', 'dragleave', 'drop'].forEach(evt => {
    dropArea.addEventListener(evt, prevDefault);
});

function prevDefault(e) {
    e.preventDefault();
    e.stopPropagation();
}

// DRAGOVER
dropArea.addEventListener("dragover", function(){
    dropArea.classList.add('active');
    dragDropText.innerHTML  = "Deixa anar per carregar";
});

// DRAGLEAVE
dropArea.addEventListener("dragleave", function(){
    dropArea.classList.remove('active');
    dragDropText.innerHTML  = "Arrossega i deixa anar";
});

//DROP
dropArea.addEventListener("drop", (event) => {

    dropArea.classList.remove('active');
    dragDropText.innerHTML  = "Arrossega i deixa anar";
    let droppedFiles = Array.from(e.dataTransfer.files);
    arrayDocuments = arrayDocuments.concat(droppedFiles);
    showFiles(arrayDocuments);

});

button.addEventListener("click", function(e) {
    e.preventDefault();
    input.click();
});
  
input.addEventListener("change", function(e) {
    let select = Array.from(input.files);
    arrayDocuments = arrayDocuments.concat(select);
    showFiles(arrayDocuments);
    input.value = null;
});
  
//FUNCIONS
function showFiles(documents) {
    if (documents.length > 0) {
        documents.forEach((document, index) => {
            processFile(document, index);
        });
    }
}

function processFile(document, index) {
    const docType = document.type;

    if (validExtensions.includes(docType)) {
        let reader = new FileReader();
        reader.readAsDataURL(document);
        reader.onload = function() {
          let prev = `<div class="previewImage">
                      <img id="img${index}" src="${reader.result}"/>
                      <span>${document.name}</span>
                      <span onclick="removeFile(${index})" class="material-symbols-outlined removeBtn">x</span>
                      </div>`;
          preview.innerHTML += prev;
        };
      } 
    else {
        arrayDocuments.splice(index, 1);
        alert("El arxiu seleccionat no és una imatge!!");
    }
}

function removeFile(index) {
    arrayDocuments.splice(index, 1);
    showFiles(arrayDocuments);
}
