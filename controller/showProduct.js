import { clientService } from "../service/client-service.js"

(async() => {

    const URLproduct = new URL(window.location)
    const id = URLproduct.searchParams.get('id')

    try {
        const data = await clientService.showProduct(id)
        


    }
    catch(error) {
        console.log(error)
    }

})()       //     <div class="selected-product__box-img">
        //     <img src="./assets/img/sw1.png" alt="caneca Star Wars" class="selected-product__img">
        // </div>
        // <div class="selected-product__box-infos">
        //     <h1 class="selected-product__title">Caneca Star Wars</h1>
        //     <p class="selected-product__price">R$ 60,00</p>
        //     <p class="selected-product__description">Voluptas voluptatum quibusdam similique, class debitis alias
        //         maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse
        //         distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae?
        //         Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi
        //         porta anim magnam</p>
        // </div>