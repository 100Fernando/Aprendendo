const voltar = document.querySelector('button.voltar')
const seletor = document.querySelector('select#seletor')
const carregar = document.querySelector('button#confirma')

voltar.addEventListener('click', () => {
    window.location = "../variaveiscompostas/arrays.html"
})

confirma.addEventListener('click',incluiN)

let num = document.querySelector('input#n1')
let n = Number(n1.value)
let opcao = document.createElement('option') 

function incluiN(n) {
    opcao.innerHtml += `${n}`

    seletor.appendChild(opcao)

    
}