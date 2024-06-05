document.addEventListener("DOMContentLoaded", function () {
    fetch("./selects/CatAndSub.php")
        .then((response) => {
            if (!response.ok) {
                throw new Error('Hi ha hagut un problema al seleccionar les categories');
            }
            return response.json();
        })
        .then((data) => {
            let cat1 = document.getElementById("cat1");
            cat1.innerHTML = "";

            data.forEach(function (cat) {
                let option = document.createElement("option");
                option.value = cat.categoriaId;
                option.text = cat.categoriaName;
                cat1.appendChild(option);
            });
            cat1.dispatchEvent(new Event("change"));
        })
        .catch((error) => {
            console.error(error);
        });
});

document.getElementById("cat1").addEventListener("change", function () {
    let select = this.value;
    // console.log(`Categoria seleccionada: ${select}`);

    let formData = new FormData();
    formData.append("cat1", select);

    let options = {
        method: 'POST',
        body: formData
    };

    fetch("./selects/CatAndSub.php", options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Hi ha hagut un problema al seleccionar les subcategories');
            }
            return response.json();
        })
        .then((data) => {
            let cat2 = document.getElementById("cat2");
            cat2.innerHTML = "";

            if (data.length > 0) {
                data.forEach(function (subc) {
                    let opt = document.createElement("option");
                    opt.value = subc.subcategoriaId;
                    opt.text = subc.subcategoriaName;
                    cat2.appendChild(opt);
                });
            } else {
                let opt = document.createElement("option");
                opt.text = "No té subcategories";
                cat2.appendChild(opt);
            }
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
});
