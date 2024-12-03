const voltar = document.querySelector('button#voltar')
const processar = document.querySelector('button#proc')
const prox = document.querySelector('button#prox1')

voltar.addEventListener('click', volta)
processar.addEventListener('click', processo)
prox.addEventListener('click', proximo)

function volta() {
    window.location = "repeticoes1.html"
}

function proximo() {
    window.location = "repeticoes3.html"
}

const divResp = document.querySelector('div#resp')
const tabela = document.createElement('table')

let itens = []
let valores = []

function processo() {

    let item1 = document.querySelector('input#item')
    let val = document.querySelector('input#valor')
    let valor = Number(val.value)
    let item = item1.value

    if (item1.value == "" || val.value == "") {
        alert("Você precisa informar os dados")
    } else {

        itens.push(item)
        valores.push(valor)

        for (x = 0; x < itens.length; x++) {
            if (x == 0) {
                tabela.innerHTML = `<th>Id</th> <th>Nome</th> <th>Valor</th>  <tr> <td>${x}</td> <td>${itens[x]}</td> <td>${valores[x]}</td> </tr>`
                divResp.appendChild(tabela)
            } else {
                tabela.innerHTML += `<tr> <td>${x}</td> <td>${itens[x]}</td> <td>${valores[x]}</td></tr>`
                divResp.appendChild(tabela)
            }
        }

        item1.value = ""
        val.value = ""
    }

}

