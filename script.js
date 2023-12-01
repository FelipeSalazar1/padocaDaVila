// Seleciona os botões e elementos do formulário no DOM
const btnCadastro = document.querySelector("form button#register");
const btnUpdate = document.querySelector("form button#update");
const btnCadastrarNovoProduto = document.querySelector("#insert-new-product");
const formInsert = document.querySelector("#insert-form");
const listProducts = document.querySelector("#list-products");
const formUpdate = document.querySelector("#update-form");

// Adiciona ouvintes de eventos de clique aos botões
btnCadastro.addEventListener("click", registerProduct);
btnUpdate.addEventListener("click", updateProduct);
btnCadastrarNovoProduto.addEventListener("click", showInsertForm);

// Array para armazenar os produtos
const products = [];

// Função para alternar a visibilidade dos elementos
function toggleVisibility(element) {
  element.classList.toggle("display-none");
  element.classList.toggle("display-flex");
}

// Função para registrar um produto
function registerProduct() {
  // Obtém os valores dos campos do formulário
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const qtd = document.querySelector("#qtd").value;
  const description = document.querySelector("#description").value;

  // Cria um objeto de produto com os valores do formulário
  const product = {
    id: products.length + 1,
    name,
    price,
    qtd,
    description,
  };

  // Adiciona o produto ao array de produtos
  products.push(product);

  // Alterna a visibilidade dos formulários e botões após o registro do produto
  toggleVisibility(formInsert);
  toggleVisibility(btnCadastrarNovoProduto);
  toggleVisibility(listProducts);

  // Atualiza a lista de produtos
  showProducts();

  // Mostra o botão "Cadastrar novo produto"
  toggleVisibility(btnCadastrarNovoProduto);
}

// Função para mostrar os produtos
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

// Função para remover um produto
function removeProduct(id) {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex > -1) {
    products.splice(productIndex, 1);
  }

  showProducts();
}

// Função para mostrar o formulário de inserção
function showInsertForm() {
  // Esconde o botão "Cadastrar novo produto"
  toggleVisibility(btnCadastrarNovoProduto);

  // Verifica se o formulário de atualização está visível
  if (!formUpdate.classList.contains("display-none")) {
    // Esconde o formulário de atualização
    toggleVisibility(formUpdate);
  }

  // Alterna a visibilidade do formulário de inserção e da lista de produtos
  toggleVisibility(formInsert);
  toggleVisibility(listProducts);
}

// Função para mostrar o formulário de atualização
function showUpdateForm() {
  // Esconde o botão "Cadastrar novo produto"
  toggleVisibility(btnCadastrarNovoProduto);

  // Verifica se o formulário de inserção está visível
  if (!formInsert.classList.contains("display-none")) {
    // Esconde o formulário de inserção
    toggleVisibility(formInsert);
  }

  // Alterna a visibilidade do formulário de atualização e da lista de produtos
  toggleVisibility(formUpdate);
  toggleVisibility(listProducts);
}

// Função para obter um produto
function getProduct(id) {
  // Encontra o produto no array de produtos
  const product = products.find((product) => product.id === id);
  if (product) {
    // Preenche os campos do formulário de atualização com os valores do produto
    document.querySelector("#name-update").value = product.name;
    document.querySelector("#price-update").value = product.price;
    document.querySelector("#qtd-update").value = product.qtd;
    document.querySelector("#description-update").value = product.description;
    document.querySelector("#id-product").value = product.id;
  }

  // Mostra o formulário de atualização
  showUpdateForm();
}

// Função para atualizar um produto
function updateProduct() {
  // Obtém os valores dos campos do formulário de atualização
  const name = document.querySelector("#name-update").value;
  const price = document.querySelector("#price-update").value;
  const qtd = document.querySelector("#qtd-update").value;
  const description = document.querySelector("#description-update").value;
  const id = document.querySelector("#id-product").value;

  // Encontra o produto no array de produtos e atualiza seus valores
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].name = name;
      products[i].price = price;
      products[i].qtd = qtd;
      products[i].description = description;
      break;
    }
  }

  // Alterna a visibilidade dos formulários e botões após a atualização do produto
  toggleVisibility(formUpdate);
  toggleVisibility(btnCadastrarNovoProduto);
  toggleVisibility(listProducts);

  // Atualiza a lista de produtos
  showProducts();

  // Mostra o botão "Cadastrar novo produto"
  toggleVisibility(btnCadastrarNovoProduto);
}
