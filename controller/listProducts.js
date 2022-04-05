import { clientService } from "../service/client-service.js"

const category = {
    "Star Wars": document.querySelector('[data-list="starwars"]'),
    "Consoles": document.querySelector('[data-list="consoles"]'),
    "Diversos": document.querySelector('[data-list="diversos"]')
}

const createProduct = (id, categoria, imagem, nome, preco) => {
    const product = document.createElement('li')
    product.classList.add("product")
    const content = `
        <img src=${imagem} alt="foto do produto" class="product__img">
        <h4 class="product__title">${nome}</h4>
        <p class="product__price">${preco}</p>
        <a href="product.html?id=${id}" class="product__link">Ver produto</a>`
    product.innerHTML = content
    
    category[categoria].appendChild(product)
}


const render = async() => {
    try{
        const data = await clientService.listProducts()
        const productsStarWars = data.filter( product => {
           return product.categoria == "Star Wars"
        })
        const productsConsoles = data.filter( product => {
           return product.categoria == "Consoles"
        })
        const productsDiversos = data.filter( product => {
           return product.categoria == "Diversos"
        })
        countElements(productsStarWars)
        countElements(productsConsoles)
        countElements(productsDiversos)
    }
    catch(error){
        console.log(error)
    }
}

const countElements = (array) => {
    for (let i=0; i<6; i++) {
        createProduct(array[i].id, array[i].categoria, array[i].imagem, array[i].nome, array[i].preco)
    }
}

render()
