const btnCadastro = document.querySelector("form button#register");
const btnUpdate = document.querySelector("form button#update");
const btnCadastrarNovoProduto = document.querySelector("#insert-new-product");
const formInsert = document.querySelector("#insert-form");
const listProducts = document.querySelector("#list-products");
const formUpdate = document.querySelector("#update-form");

btnCadastro.addEventListener("click", registerProduct);
btnUpdate.addEventListener("click", updateProduct);
btnCadastrarNovoProduto.addEventListener("click", () => {
  formInsert.classList.toggle("display-none");
  formInsert.classList.toggle("display-flex");
  btnCadastrarNovoProduto.classList.toggle("display-none");
  listProducts.classList.toggle("display-none");
});

const products = [];

function registerProduct() {
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const qtd = document.querySelector("#qtd").value;
  const description = document.querySelector("#description").value;

  const product = {
    id: products.length + 1,
    name,
    price,
    qtd,
    description,
  };

  products.push(product);

  formInsert.classList.toggle("display-none");
  formInsert.classList.toggle("display-flex");
  btnCadastrarNovoProduto.classList.toggle("display-none");
  btnCadastrarNovoProduto.classList.toggle("display-flex");
  listProducts.classList.toggle("display-none");

  showProducts();
}

function showProducts() {
  const productRows = document.querySelector("#product-rows");
  productRows.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    productRows.innerHTML += `
      <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].qtd}</td>
        <td>${products[i].description}</td>
        <td><button onclick="removeProduct(${products[i].id})">Excluir</button></td>
        <td><button onclick="getProduct(${products[i].id})">Atualizar</button></td>
      </tr>
    `;
  }
}

// function findProductById(id) {
//   return products.find((product) => product.id === id);
// }

function removeProduct(id) {
  // const productFinder = findProductById(id);
  // products.splice(products.indexOf(productFinder), 1);
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
      break;
    }
  }

  showProducts();
}

function getProduct(id) {
  formUpdate.classList.toggle("display-flex");
  formUpdate.classList.toggle("display-none");

  btnCadastrarNovoProduto.classList.toggle("display-none");
  btnCadastrarNovoProduto.classList.toggle("display-flex");

  listProducts.classList.toggle("display-none");

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      document.querySelector("#name-update").value = products[i].name;
      document.querySelector("#price-update").value = products[i].price;
      document.querySelector("#qtd-update").value = products[i].qtd;
      document.querySelector("#description-update").value =
        products[i].description;
      document.querySelector("#id-product").value = products[i].id;
      break;
    }
  }
}

const btnUpdateProduct = document.querySelector("#update");

btnUpdateProduct.addEventListener("click", updateProduct);

function updateProduct() {
  const name = document.querySelector("#name-update").value;
  const price = document.querySelector("#price-update").value;
  const qtd = document.querySelector("#qtd-update").value;
  const description = document.querySelector("#description-update").value;
  const id = document.querySelector("#id-product").value;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].name = name;
      products[i].price = price;
      products[i].qtd = qtd;
      products[i].description = description;
      break;
    }
  }

  btnCadastrarNovoProduto.classList.toggle("display-none");
  btnCadastrarNovoProduto.classList.toggle("display-flex");
  listProducts.classList.toggle("display-none");
  formUpdate.classList.toggle("display-flex");
  formUpdate.classList.toggle("display-none");

  showProducts();
}
