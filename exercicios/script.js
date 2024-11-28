const voltar = document.querySelector('button.voltar')
const imagem = document.querySelector('img#imagem')

voltar.addEventListener("click", volta)

function volta() {
 window.location = "../Aulas/Condicoes.html"
}

function horario() {
    
    const hora = new Date()
    const divHoras = document.querySelector("div#horas")
    const horas = hora.getHours()

    if(horas >= 0 && horas < 12) {
        divHoras.innerHTML = `Bom dia, agora são ${horas}h`
    } else if ( horas >= 12 && horas < 18) {
        divHoras.innerHTML = `Boa tarde, agora são ${horas}h`
    } else {
        divHoras.innerHTML = `Boa noite, agora são ${horas}h`
    }
    

    if(horas >= 0 && horas < 12) {
        imagem.src = "../img/manha.png"
    } else if ( horas >= 12 && horas < 18) {
        imagem.src = "../img/tarde.png"
    } else {
        imagem.src = "../img/noite.png"
    }
}


