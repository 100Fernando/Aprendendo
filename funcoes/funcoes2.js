document.querySelector('button.voltar').addEventListener('click', () => {
    window.location = 'funcoes1.html'
})

document.querySelector('button.proc').addEventListener('click', recheios)


function recheios() {

    let recheio1 = document.querySelector('input#recheio1').value
    let recheio2 = document.querySelector('input#recheio2').value

    let pizza = juntarPizza(recheio1, recheio2)

    document.querySelector('div#res').innerHTML = `Seu pedido é ${pizza}`

}

function juntarPizza(recheio1, recheio2) {
    return `pizza de ${recheio1} com ${recheio2}`
}