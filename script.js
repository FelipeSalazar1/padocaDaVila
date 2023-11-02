const btnCadastro = document.querySelector('form button#register');

btnCadastro.addEventListener('click', registerProduct);

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
                <td><a onclick="removeProduct(${products[i].id})">Excluir</a></td>
            </tr>
        `
    }
}

function findProductById(id) {
    return products.find(product => product.id === id)
}

function removeProduct(id) {
    const productFinder = products.find(product => product.id === id) 
    products.splice(products.indexOf(productFinder), 1)

    showProducts();
}