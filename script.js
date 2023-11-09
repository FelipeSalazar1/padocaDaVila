const btnCadastro = document.querySelector('form button#register');
const btnUpdate = document.querySelector('form button#update');
const btnCadastrarNovoProduto = document.querySelector("#insert-new-product")
const formInsert = document.querySelector("#insertForm")
const listProducts = document.querySelector("#listProducts")
const formUpdate = document.querySelector("#updateForm")

btnCadastro.addEventListener('click', registerProduct);
btnUpdate.addEventListener('click', updateProduct);
btnCadastrarNovoProduto.addEventListener("click", () => {
    formInsert.classList.toggle('displayNone')
    formInsert.classList.toggle('displayFlex')
    btnCadastrarNovoProduto.classList.toggle('displayNone')
    listProducts.classList.toggle("displayNone")
})

const products = []

function registerProduct(){
    const name = document.querySelector('form #name').value;
    const price = document.querySelector('form #price').value;
    const qtd = document.querySelector('form #qtd').value;
    const description = document.querySelector('form #description').value;

    const product = {
        id: products.length + 1,
        name,
        price,
        qtd,
        description
    }

    products.push(product)
    
    formInsert.classList.toggle('displayNone')
    formInsert.classList.toggle('displayFlex')

    btnCadastrarNovoProduto.classList.toggle('displayNone')
    btnCadastrarNovoProduto.classList.toggle('displayFlex')

    listProducts.classList.toggle('displayNone')
    listProducts.classList.toggle('displayFlex')


    showProducts();
}

function showProducts() {
    const productRows= document.querySelector('#productRows')

    productRows.innerHTML = "";
    for(let i = 0; i < products.length; i++){
        productRows.innerHTML += `
            <tr>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].qtd}</td>
                <td>${products[i].description}</td>
                <td><button onclick="removeProduct(${products[i].id})">Excluir</button></td>
                <td><button onclick="getProduct(${products[i].id})">Atualizar</button></td>
            </tr>
        `
    }
}

//function findProductById(id) {
//    return products.find(product => product.id === id)
//}

function removeProduct(id) {
    //const productFinder = products.find(product => product.id === id) 
    //products.splice(products.indexOf(productFinder), 1)

    for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products.splice(i, 1)
            break
        }
    }

    showProducts();
}

function getProduct(id) {
    formUpdate.classList.toggle("displayFlex")
    formUpdate.classList.toggle("displayNone")

    btnCadastrarNovoProduto.classList.toggle('displayFlex')
    btnCadastrarNovoProduto.classList.toggle('displayNone')

    listProducts.classList.toggle("displayNone")

    for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
            document.querySelector('form #nameUpdate').value = products[i].name;
            document.querySelector('form #priceUpdate').value = products[i].price;
            document.querySelector('form #qtdUpdate').value = products[i].qtd;
            document.querySelector('form #descriptionUpdate').value = products[i].description;
            document.querySelector("#id-product").value = products[i].id;
            break;
        }
    }
}

const btnUpdateProduct = document.querySelector("#update")

btnUpdateProduct.addEventListener('click', updateProduct)

function updateProduct() {
    const name = document.querySelector('form #nameUpdate').value;
    const price = document.querySelector('form #priceUpdate').value;
    const qtd = document.querySelector('form #qtdUpdate').value;
    const description = document.querySelector('form #descriptionUpdate').value;
    const id = document.querySelector("#id-product").value;

    for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products[i].name = name;
            products[i].price = price;
            products[i].qtd = qtd;
            products[i].description = description;
            break;
        }
    }

    btnCadastrarNovoProduto.classList.toggle('displayFlex')
    btnCadastrarNovoProduto.classList.toggle('displayNone')

    listProducts.classList.toggle("displayNone")
    listProducts.classList.toggle("displayFlex")

    formUpdate.classList.toggle("displayFlex")
    formUpdate.classList.toggle("displayNone")

    showProducts();
}