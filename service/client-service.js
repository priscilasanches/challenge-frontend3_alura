const listProducts = () => { 
    return fetch('http://localhost:3000/products')
    .then(response =>  {
        if (response.ok){
            return response.json()
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

const dataProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`)
    .then (response => {
        if(response.ok){
            return response.json()
        }
        throw new Error('Não foi possível acessar as informações do produto')
    })
}

export const clientService = {
    listProducts,
    dataProduct
}