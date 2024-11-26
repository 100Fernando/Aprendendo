const confirma = document.querySelector("button#confirmaNumeros")
const reset = document.querySelector('button#reset')

confirma.addEventListener('click', clicou)
reset.addEventListener('click', resetar)

function clicou() {
    const n1 = document.querySelector('input#numero1')
    const n10 = Number(n1.value)
    const n2 = document.querySelector('input#numero2')
    const n20 = Number(n2.value)
    const res = document.querySelector('div#res')
    if(n20 > n10) {
        res.innerHTML = `<br>A velocidade da via é ${n10}Km/h e o carro estava a ${n20}Km/h, você aplicou uma multa nesse otário e vamos mandar o dinheiro dele pro Lula`
    } else {
        res.innerHTML = `<br>A velocidade da via é ${n10}Km/h e o carro estava a <strong>${n20}Km/h</strong>. Infelizmente você deixou de faturar pro estado. Lança uma velocidade maior e vamos multar mesmo assim!! `
    }
    res.innerHTML += `<br>Bom trabalho, temos metas a ser batidas`

}

function resetar () {
    window.location = "Condicoes.html"
}