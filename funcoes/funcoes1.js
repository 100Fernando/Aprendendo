const voltar = document.querySelector('button.voltar')
const seletor = document.querySelector('select#seletor')
const carregar = document.querySelector('button#confirma')
const botaoProcessar = document.querySelector('button#Processar')
const result = document.querySelector('div#resultado')

document.querySelector('button.prox1').addEventListener('click', ()=> {
 window.location = 'funcoes2.html'
})


voltar.addEventListener('click', () => {
    window.location = "../variaveiscompostas/arrays.html"
})

botaoProcessar.addEventListener('click', Processa)



let num = document.querySelector('input#n1')


let n = []
carregar.addEventListener('click', incluiN)

function incluiN() {
    
    if(num.value == "") {
        alert('É preciso informar algum número!!')
        return
    }

    let valida = Number(num.value)

    if(n.indexOf(valida) >= 0 ) {
        alert('esse valor já está cadastrado!')
        return
    }
    result.innerHTML = ""
    botaoProcessar.style.visibility = "visible"
    seletor.style.visibility = "visible"
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

    num.focus()

}

function Processa() {
    let a = 0
    for (let i = 0; i < n.length; i++) {

        a += n[i]
    }

    n.sort()

    let media = a / n.length

    const resposta = document.createElement('h3')

    resposta.innerHTML = `<br> Sua array tem ${n.length} itens <br>`
    resposta.innerHTML += `A soma dos itens da array é ${a} <br>`
    resposta.innerHTML += `A média dos valores na array é ${media}<br>`
    resposta.innerHTML += `O menor valor na array é ${n[0]}<br>`
    resposta.innerHTML += `O maior valor na array é ${n[n.length - 1]}<br>`

    result.appendChild(resposta)
} 