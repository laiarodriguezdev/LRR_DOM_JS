let arrayDocuments = [];

let dropArea = document.querySelector('.drop-area');
let dragDropText = document.querySelector("h2");
let button = document.querySelector("button");
let input = document.querySelector("#input-file");
let preview = document.querySelector("#preview");
const events = ['dragover', 'dragleave', 'drop'];

events.forEach(function(event) {
  dropArea.addEventListener(event, prevDefault);
});

function prevDefault(e) {
  e.preventDefault();
  e.stopPropagation();
}

dropArea.addEventListener('dragover', function() {
  dropArea.classList.add('active');
  dragDropText.innerHTML = "Drop to upload files";
});

dropArea.addEventListener('dragleave', function() {
  dropArea.classList.remove('active');
  dragDropText.innerHTML = "Drag & Drop files";
});

dropArea.addEventListener("drop", function(e) {
  dropArea.classList.remove("active");
  let fitxersArray = Array.from(e.dataTransfer.files);
  arrayDocuments = arrayDocuments.concat(fitxersArray);
  showFiles(arrayDocuments);
  console.log(arrayDocuments);
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

function showFiles(fitxers) {
  preview.innerHTML = "";
  fitxers.forEach((fitxer, index) => {
    processFile(fitxer, index);
  });
}

function processFile(fitxer, index) {
  const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  const docType = fitxer.type;
  if (validExtensions.includes(docType)) {
    let reader = new FileReader();
    reader.readAsDataURL(fitxer);
    reader.onload = function() {
      let prev = `<div class="previewImage">
                  <img id="img${index}" src="${reader.result}"/>
                  <span>${fitxer.name}</span>
                  <span onclick="removeFile(${index})" class="material-symbols-outlined removeBtn">x</span>
                  </div>`;
      preview.innerHTML += prev;
    };
  } else {
    arrayDocuments.splice(index, 1);
    alert("El fichero seleccionado no és una imagen.");
  }
}

function removeFile(index) {
    arrayDocuments.splice(index, 1);
  showFiles(arrayDocuments);
}