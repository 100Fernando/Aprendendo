const voltar = document.querySelector('button.voltar')
const seletor = document.querySelector('select#seletor')
const carregar = document.querySelector('button#confirma')

voltar.addEventListener('click', () => {
    window.location = "../variaveiscompostas/arrays.html"
})



let num = document.querySelector('input#n1')


let n = []
carregar.addEventListener('click', incluiN)

function incluiN() {
    seletor.innerHTML = ''
    n.push(Number(n1.value))

    for (let x = 0; x < n.length; x++) {
        let opcao = document.createElement('option')
        opcao.setAttribute('value', n[x])
        opcao.innerText += `Inserido nº: ${n[x]}`
        seletor.appendChild(opcao)
        seletor.setAttribute('size', n.length)
    }

    num.value = ''

}