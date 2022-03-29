
export function msgError (input, typeInput) {
    let message = ''

    typeErrors.forEach( error => {
        if (input.validity[error]) {
            message = errorsMessages[typeInput][error]             
        }
    })
    return message
}

const typeErrors = [
    'customError',
    'patternMismatch',
    'valueMissing']

const errorsMessages = {
    description: {
        valueMissing:'Por favor, descreva o produto.'
    },
    email: {
        valueMissing:'Por favor, descreva o produto.',
        patternMismatch: 'O e-mail deve estar no formato "fulano@empresa.com".'
    },
    name: {
        valueMissing:'Por favor, informe o seu nome.'
    },
    msg: {
        valueMissing:'Por favor, escreva sua mensagem.'
    },
    price: {
        customError: 'O valor do produto não pode ser zero.',
        valueMissing: 'Por favor, informe o valor do produto.'
    },
    product: {
        valueMissing: 'Por favor, informe o nome do produto.'
    },
    password: {
        valueMissing: 'Por favor, informe sua senha.'
    }
}
