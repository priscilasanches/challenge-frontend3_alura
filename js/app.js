import {validate} from './validation/Validate.js'

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
document.querySelector('[data-input="product"]').focus()
document.querySelector('[data-input="price"]').classList.remove('error')
document.querySelector('[data-error="price"]').innerHTML = ''  