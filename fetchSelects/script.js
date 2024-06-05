const categoriaSelect = document.getElementById("categoriaSelect");
const subcategoriaSelect = document.getElementById("subcategoriaSelect");

// CATEGORIA
fetch("getCatGets.php")
  .then(response => response.json())
  .then(data => {
    data.forEach(categoria => {
      let optionSelect = document.createElement("option");
      optionSelect.value = categoria.id; 
      optionSelect.text = categoria.name; 
      categoriaSelect.appendChild(optionSelect);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

categoriaSelect.addEventListener("change", function() {
  let categoriaValor = this.value;
  console.log("Valor:", categoriaValor);

  let formData = new FormData();
  formData.append("categoria", categoriaValor); 

  subcategoriaSelect.innerHTML = '';

  let options = {
    method: 'POST',
    body: formData
  };

  // SUBCATEGORIA
  fetch("getSubGets.php", options)
    .then(response => response.json())
    .then(data => {
      data.forEach(subcategoria => {
        let optionSelect = document.createElement("option");
        optionSelect.value = subcategoria.id;
        optionSelect.text = subcategoria.name;
        subcategoriaSelect.appendChild(optionSelect);
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
});
