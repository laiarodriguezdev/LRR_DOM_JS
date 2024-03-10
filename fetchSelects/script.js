const categoriaSelect = document.getElementById("categoriaSelect");
const subcategoriaSelect = document.getElementById("subcategoriaSelect");

let formData = new FormData();

let options = {
  method: 'POST',
  body: formData
}

//CATEGORIA
fetch("getCatGets.php")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((categoria) => {
      let optionSelect = document.createElement("option");
      optionSelect.value = categoria.id; 
      optionSelect.text = categoria.name; 
      categoriaSelect.appendChild(optionSelect);
    });
  })
  .catch((error) => {
    console.error("Error", error);
  });

  categoriaSelect.addEventListener("change", function() {
    let categoriaValor = this.value;
    console.log("Valor:", categoriaValor);

    formData.append("categoria", valor); 
    subcategoriaSelect.innerHTML = '';

//SUBCATEGORIA
fetch("getSubGets.php", options)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((subcategoria) => {
        let optionSelect = document.createElement("option");
        optionSelect.value = subcategoria.id;
        optionSelect.text = subcategoria.name;
        subcategoriaSelect.appendChild(optionSelect);
      });
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
});