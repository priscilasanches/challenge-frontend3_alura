import { clientService } from "../service/client-service.js"
import { createProduct } from "./index-listproducts.js"


(async() => {
    const URLproduct = new URL(window.location)
    const id = URLproduct.searchParams.get('id')

    const showProduct = (product) => {  
        const sectionProduct = document.querySelector('[data-product]')
        const content = `
        <div class="selected-product__box-img">
            <img src=${product.imagem} alt class="selected-product__img">
        </div>
        <div class="selected-product__box-infos">
            <h1 class="selected-product__title">${product.nome}</h1>
            <p class="selected-product__price">${product.preco}</p>
            <p class="selected-product__description">${product.descricao}</p>
        </div>`
        sectionProduct.innerHTML = content
    }

    const showSimilars = async (categoria) => {
        try {
            const listproducts = await clientService.listProducts()
            const sectionSimilar = document.querySelector('[data-similar]')
            const productsSimilar = listproducts.filter( product => {
                return product.categoria == categoria
            })
            for (let i=0; i<6; i++){
                const card = createProduct(productsSimilar[i].id, productsSimilar[i].imagem, productsSimilar[i].nome, productsSimilar[i].preco)
                console.log(sectionSimilar)
                sectionSimilar.appendChild(card)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    try {
        const product = await clientService.dataProduct(id)
        showProduct(product)
        showSimilars(product.categoria)
    }
    catch(error) {
        console.log(error)
    }
})()
