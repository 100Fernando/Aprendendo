const voltar = document.querySelector('button.voltar')
const passa = document.querySelector('button.prox1')
const processa = document.querySelector('button#confirma')

voltar.addEventListener("click", volta)
passa.addEventListener('click', proximo)
processa.addEventListener('click', processar)

function volta() {
    window.location = "../exercicios/exercicio2.html"
   }

function proximo () {
    window.location = "repeticoes2.html"
}

const divRepet = document.querySelector('div#repet')
let dentroDiv = document.createElement('p')






function processar() {
    let repeticoes = 0
    const repet = document.querySelector('input#repet')
    const nRepet = Number(repet.value)
    const texto = document.querySelector('input#texto').value
    const id = document.getElementsByName('radrepet')

    if(id[0].checked){
    while(repeticoes < nRepet) {
        dentroDiv.innerHTML += `Id: ${repeticoes} - ${texto} <br>`
        repeticoes++
        }
    } else {
        while(repeticoes < nRepet) {
            dentroDiv.innerHTML += `${texto} <br>`
            repeticoes++
            }
    }
}

divRepet.appendChild(dentroDiv)