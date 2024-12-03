const voltar = document.querySelector('button.voltar')
const tabuada = document.querySelector('button#tabuada')
const divTabuada = document.querySelector('div#tabuada')


voltar.addEventListener("click", () => {
    window.location = "repeticoes3.html"
})

tabuada.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    const n0 = document.querySelector('input#numero1')
    const resultadoAdicao = document.createElement('div')
    resultadoAdicao.className = "box"
    const resultadoSubtracao = document.createElement('div')
    resultadoSubtracao.className = "box"
    const resultadoMultiplicacao = document.createElement('div')
    resultadoMultiplicacao.className = "box"
    const resultadoDivisao = document.createElement('div')
    resultadoDivisao.className = "box"

    if (n0 == '') {
        alert('Informe os números solicitados')
        return
    }

    const n1 = Number(n0.value)

    for (x = 0; x <= 10; x++) {
        if (x == 0) {
            resultadoAdicao.innerHTML += `ADIÇÃO: <br> ${n1} + ${x} = ${n1 + x} <br>`
            resultadoSubtracao.innerHTML += `SUBTRAÇÃO: <br> ${n1} - ${x} = ${n1 - x} <br>`
            resultadoMultiplicacao.innerHTML += `MULTIPLICAÇÃO: <br> ${n1} * ${x} = ${n1 * x} <br>`
            resultadoDivisao.innerHTML += `DIVISÃO: <br> Não se divide por zero.. <br>`
        }
        else {

            resultadoAdicao.innerHTML += ` ${n1} + ${x} = ${n1 + x} <br>`
            resultadoSubtracao.innerHTML += ` ${n1} - ${x} = ${n1 - x} <br>`
            resultadoMultiplicacao.innerHTML += `${n1} * ${x} = ${n1 * x} <br>`
            resultadoDivisao.innerHTML += `${n1} / ${x} = ${parseFloat(n1 / x).toFixed(2)} <br>`
        }

    }
    divTabuada.appendChild(resultadoAdicao)
    divTabuada.appendChild(resultadoSubtracao)
    divTabuada.appendChild(resultadoMultiplicacao)
    divTabuada.appendChild(resultadoDivisao)

}
