const successMsg ={
    "footer": "Mensagem enviada com sucesso!",
    "addProduct": "Produto adicionado com sucesso."
}

const showSuccessMsg = (formSent) => {
    const areaSuccess = document.querySelector(`[data-success=${formSent}]`)
    areaSuccess.innerHTML = successMsg["footer"]   

    //limpa campos após envio
    const inputs = areaSuccess.parentElement.querySelectorAll('[data-input]')
    inputs.forEach((input) => {
        input.value=""
    })
    //limpa msg da tela após 3s
    setTimeout(() => {
        areaSuccess.innerHTML = ""        
    } , 3000)
}

export const sendForm = (button) => {
    const formSent = button.dataset.submit
    showSuccessMsg(formSent)
}

