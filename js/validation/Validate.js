import {msgError} from './Errors.js'

export function validate (input) {

    const typeInput = input.dataset.input

    //validações conforme tipo de input
    if (typeInput === 'price') {
        const price = input.value
        input.setCustomValidity('')

        if (price == 'R$ 0,00'){
            input.setCustomValidity('O valor do produto não pode ser 0')
        }
    }


    //Atualiza mensagens de erro
    const areaError = document.querySelector(`[data-error=${typeInput}]`)
    let message = ''
   
    if (!input.validity.valid) {      
        message = msgError(input, typeInput) //retorna uma msg de erro
        input.classList.add('error')
        areaError.innerHTML = message 
        return
    }

    input.classList.remove('error')
    areaError.innerHTML = ''        
}

