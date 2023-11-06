const btnCadastro = document.querySelector('form button#register');
const btnUpdate = document.querySelector('form button#update');

btnCadastro.addEventListener('click', registerProduct);
btnCadastro.addEventListener('click', updateProduct);

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
    const formUpdate = document.querySelector("#updateForm")
    const formInsert = document.querySelector("#insertForm")
    const listProduct = document.querySelector("#listProducts")

    listProduct.classList.toggle("displayNone")

    formUpdate.classList.toggle("displayFlex")
    formUpdate.classList.toggle("displayNone")

    formInsert.classList.toggle("displayFlex")
    formInsert.classList.toggle("displayNone")

    product = {}

    for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
            document.querySelector('form #nameUpdate').value = products[i].name;
            document.querySelector('form #priceUpdate').value = products[i].price;
            document.querySelector('form #qtdUpdate').value = products[i].qtd;
            document.querySelector('form #descriptionUpdate').value = products[i].description;
            break
        }
    }

    
}