const device = document.querySelector('[data-device]')
const mediaQueryComputer = window.matchMedia("(min-width: 1000px)")
const mediaQueryTablet = window.matchMedia("(min-width: 768px)")
const mediaQueryMobile = window.matchMedia("(min-width: 0px)")

//carrega a página conforme tamanho da tela
handleOrientation()

//muda comportamento conforme tamanho da tela
mediaQueryComputer.addEventListener('change', handleOrientation)
mediaQueryTablet.addEventListener('change', handleOrientation)
mediaQueryMobile.addEventListener('change', handleOrientation)

function handleOrientation() {
    if (mediaQueryComputer.matches) {
        device.innerHTML = "Procure no seu computador"
    } else if (mediaQueryTablet.matches) {
        device.innerHTML = "Procure no seu tablet"
    } else {
        device.innerHTML = "Adicionar uma imagem para o produto"
    }
}

