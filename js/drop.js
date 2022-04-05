const dropzone = document.querySelector('[data-dropzone')
const dropzoneTxt = document.querySelector('.form__drop-file__txt')

dropzone.addEventListener('drop', dropHandler)
dropzone.addEventListener('dragover', dragOverHandler)


function dropHandler(event) {      
    // Impedir o comportamento padrão do navegador de abrir o arquivo
    event.preventDefault();
    for (let i = 0; i < event.dataTransfer.items.length; i++) {
        const file = event.dataTransfer.items[i].getAsFile();
            if (file.type === "image/jpeg" ||
              file.type === "image/jpg" ||
              file.type === "image/png") { 

                dropzoneTxt.textContent = `Imagem adicionada: ${file.name}`  

            }
    }
}

function dragOverHandler(event) {      
    event.preventDefault()
}
