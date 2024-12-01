const voltar = document.querySelector('button#voltar')
const processar = document.querySelector('button#proc')

voltar.addEventListener('click', volta)
processar.addEventListener('click', processo)

function volta() {
    window.location = "repeticoes1.html"
}

const divResp = document.querySelector('div#resp')
const tabela = document.createElement('table')

let itens = []
let valores = []

function processo() {
    let item = document.querySelector('input#item').value
    let val = document.querySelector('input#valor')
    let valor = Number(val.value)



    itens.push(item)
    valores.push(valor)

    for (x = 0; x < itens.length; x++) {
        if (x == 0) {
            tabela.innerHTML = `<th>Nome</th> <th>Valor</th> <tr> <td>${itens[x]}</td> <td>${valores[x]}</td></tr>`
            divResp.appendChild(tabela)
        } else {
            tabela.innerHTML += `<tr> <td>${itens[x]}</td> <td>${valores[x]}</td></tr>`
            divResp.appendChild(tabela)
        }
    }

}

