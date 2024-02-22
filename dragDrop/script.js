let arrayDocuments=[];

const dropArea = document.querySelector('.dropArea');
const dragDropText = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.querySelector('#input-file');
const preview = document.querySelector('#preview');

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