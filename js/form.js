import { sendForm } from './validation/Send.js'
import {validate} from './validation/Validate.js'

//Validação inputs
const inputs = document.querySelectorAll('[data-input]')
inputs.forEach(input => {
    //aplicando máscara no campo de preço
    if(input.dataset.input === 'price') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }
    //adicionando verificação de validade ao 'desfocar' do campo
    input.addEventListener('blur', (event) => {
        validate(event.target)
    })
})
//tirando o foco inicial do campo de preço (gerado pela máscara)
const priceInput = document.querySelector('[data-input="price"]')
if (priceInput) {
    document.querySelector('.header__search__input').focus()
    priceInput.classList.remove('error')
    document.querySelector('[data-error="price"]').innerHTML = ''
}  

//validando footer
const button = document.querySelector('[data-submit="footer"]')
button.addEventListener('click', (event) => {
    event.preventDefault()
    const inputs = {
        "name": document.querySelector('[data-input="name"]'),
        "msg": document.querySelector('[data-input="msg"]')
    }

    if(!validate(inputs["name"])&&!validate(inputs["msg"])){
        sendForm(button)
    }
})