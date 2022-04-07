import { clientService } from "../../service/client-service.js"
import { validate } from "../validation/Validate.js"

const inputs = {
    "email": document.querySelector('[data-input="email"]'),
    "password": document.querySelector('[data-input="password"]')
} 

const authenticate = async () => {
    try {
        let find = false
        const dataLogin = await clientService.users()
        dataLogin.forEach(user => {
            if ((inputs["email"].value==user.email) && (inputs["password"].value==user.senha)){
                window.location.href = 'addproduct.html'
                console.log("autenticado")
                find = true
            }           
        })
        if (!find) {
            const areaError = document.querySelector('[data-error="login"]')
            areaError.innerHTML = "Dados incorretos. Em fase de teste, entrar com: admin1@alurageek.com / 1234"
        }
        
    }
    catch(error){
        console.log(error)
    }
}

const button = document.querySelector('[data-submit="login"]')
button.addEventListener('click', (event) => {
    event.preventDefault()

    if(!validate(inputs["email"])||!validate(inputs["password"])){
        authenticate()
    }
})
