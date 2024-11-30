const voltar = document.querySelector('button.voltar')
const imagem = document.querySelector('img#imagem')
const corpo  = document.querySelector('body')
const altera = document.querySelector('button#horaDesejada')
const passa = document.querySelector('button.prox1')

voltar.addEventListener("click", volta)
altera.addEventListener('click', alterarHora)
passa.addEventListener('click', proximo)

function volta() {
 window.location = "../Aulas/Condicoes.html"
}

const hora = new Date()
const divHoras = document.querySelector("div#horas")
let horas = hora.getHours()

function horario() {
    
    if(horas >= 0 && horas < 12) {
        divHoras.innerHTML = `Bom dia, agora são ${horas}h`
        corpo.style.background = "rgb(209, 178, 0)"
    } else if ( horas >= 12 && horas <= 18) {
        divHoras.innerHTML = `Boa tarde, agora são ${horas}h`
        corpo.style.background = "rgb(146, 41, 0)"
    } else {
        divHoras.innerHTML = `Boa noite, agora são ${horas}h`
        corpo.style.background = "rgb(85, 85, 85)"
    }
    

    if(horas >= 0 && horas < 12) {
        imagem.src = "../img/manha.png"
    } else if ( horas >= 12 && horas <= 18) {
        imagem.src = "../img/tarde.png"
    } else {
        imagem.src = "../img/noite.png"
    }
}

function alterarHora() {
    let horass = document.querySelector('input#horaDesejada')
    horas = Number(horass.value)
    if(horas >= 0 && horas < 12) {
        divHoras.innerHTML = `Bom dia, agora são ${horas}h`
        corpo.style.background = "rgb(209, 178, 0)"
    } else if ( horas >= 12 && horas <= 18) {
        divHoras.innerHTML = `Boa tarde, agora são ${horas}h`
        corpo.style.background = "rgb(146, 41, 0)"
    } else {
        divHoras.innerHTML = `Boa noite, agora são ${horas}h`
        corpo.style.background = "rgb(85, 85, 85)"
    }
    

    if(horas >= 0 && horas < 12) {
        imagem.src = "../img/manha.png"
    } else if ( horas >= 12 && horas <= 18) {
        imagem.src = "../img/tarde.png"
    } else {
        imagem.src = "../img/noite.png"
    }
}

function proximo() {
    window.location = "exercicio2.html"
}