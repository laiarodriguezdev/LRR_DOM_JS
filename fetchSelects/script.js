const categoriaSelect = document.getElementById("categoriaSelect");
const subcategoriaSelect = document.getElementById("subcategoriaSelect");

fetch("./selects/getCatGets.php")
  .then(response => response.json())
  .then(data => {
    data.forEach(categoria => {
      let optionSelect = document.createElement("option");
      optionSelect.value = categoria.categoriaId;
      optionSelect.text = categoria.categoriaName;
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

  fetch("./selects/getSubCats.php", options)
    .then(response => response.json())
    .then(data => {
      data.forEach(subcategoria => {
        let optionSelect = document.createElement("option");
        optionSelect.value = subcategoria.subcategoriaId;
        optionSelect.text = subcategoria.subcategoriaName;
        subcategoriaSelect.appendChild(optionSelect);
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
});
