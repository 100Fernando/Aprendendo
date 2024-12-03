const confirma = document.querySelector("button#confirmaNumeros")
const reset = document.querySelector('button#reset')
const proximo = document.querySelector('button#exercicio')

confirma.addEventListener('click', clicou)
reset.addEventListener('click', resetar)
proximo.addEventListener('click', exercicio)

function clicou() {
    const n1 = document.querySelector('input#numero1')
    const n10 = Number(n1.value)
    const n2 = document.querySelector('input#numero2')
    const n20 = Number(n2.value)
    const res = document.querySelector('div#res')

    if (n10 == "" || n20 == "") {
        alert('Verifique os dados informados. Não podem ser vazios!')
    } else {

        if (n20 == n10) {
            res.innerHTML = `<br>A velocidade da via é ${n10}Km/h e o carro estava a <strong>${n20}Km/h</strong>, esse cara é esperto, mas não mais que nós! Lança uma velocidade maior e vamos multar mesmo assim!`
        } else if (n20 > n10 && n20 < (n10 * 1.5)) {
            res.innerHTML = `<br>A velocidade da via é ${n10}Km/h e o carro estava a <strong>${n20}Km/h</strong>, você aplicou uma multa nesse otário e vamos mandar o dinheiro dele pro Lula`
        } else if (n20 >= (n10 * 1.5)) {
            res.innerHTML = `<br>A velocidade da via é ${n10}Km/h e o carro estava a <strong>${n20}Km/h</strong>. EITA PREULA! O CARA ACHA QUE É O AYRTON SENNA KKKKK. Vamos tomar a habilitação desse cabra! Dá uma gravíssima e suspende a CNH!! MAIS GRANA PRO DETRAN!!! `
        } else {
            res.innerHTML = `<br>A velocidade da via é ${n10}Km/h e o carro estava a <strong>${n20}Km/h</strong>. Infelizmente você deixou de faturar pro estado. Lança uma velocidade maior e vamos multar mesmo assim!! `
        }
        res.innerHTML += `<br>Bom trabalho, temos metas a serem batidas`
        res.style.background = "rgb(180, 216, 80)"

        const dataMulta = new Date()
        const dataFormatada = `${dataMulta.toLocaleDateString()} ${dataMulta.toLocaleTimeString()} `
        const dia = dataMulta.getDay()
        switch (dia) {
            case 0:
                res.innerHTML += `<br><br>Data da multa: ${dataFormatada} Domingo`
                break
            case 1:
                res.innerHTML += `<br><br>Data da multa: ${dataFormatada} Segunda`
                break
            case 2:
                res.innerHTML += `<br><br>Data da multa: ${dataFormatada} Terça`
                break
            case 3:
                res.innerHTML += `<br><br>Data da multa: ${dataFormatada} Quarta`
                break
            case 4:
                res.innerHTML += `<br><br>Data da multa: ${dataFormatada} Quinta`
                break
            case 5:
                res.innerHTML += `<br><br>Data da multa: ${dataFormatada} Sexta`
                break
            case 6:
                res.innerHTML += `<br><br>Data da multa: ${dataFormatada} Sábado`
                break
            default:
                res.innerHTML += `<br><br>Data da multa: ${dataFormatada} inválida`
                break
        }
    }

}

function resetar() {
    const n1 = document.querySelector('input#numero1')
    const n2 = document.querySelector('input#numero2')
    const res = document.querySelector('div#res')

    n1.value = ''
    n2.value = ''

    res.innerHTML = ''
    
}

function exercicio() {
    window.location = "../exercicios/exercicio1.html"
}