const voltar = document.querySelector('button.voltar')
const prox1 = document.querySelector('button.prox1')
const classifica = document.querySelector('button#classifica')
const resp = document.querySelector('div#resp')
const pesquisa = document.querySelector('div#pesquisa')
const resultPesquisa = document.querySelector('div#resultPesquisa')
const pesquisar = document.querySelector('button#pesquisar')

const confirma = document.querySelector('button#confirma')

voltar.addEventListener('click', () => {
    window.location = "../repeticoes/repeticoes4.html"
})

pesquisar.addEventListener('click', pesquisarArray)

let a = []
const p = document.createElement('p')

confirma.addEventListener('click', confirmado)

classifica.addEventListener('click', () => {
    a.sort()
    /*for (x = 0; x < a.length; x++) {
        if (x == 0) {
            p.innerHTML = `Sua array =  ${a[x]}`
        } else {
            p.innerHTML += `, ${a[x]}`
        }
        resp.appendChild(p)
    }*/
    for (x in a) {
        if (x == 0) {
            p.innerHTML = `Sua array tem ${a.length} item(s) e são: <br>${a[x]}`
        } else {
            p.innerHTML += `, ${a[x]}`
        }
        resp.appendChild(p)

    }

})


function confirmado() {

    let n0 = document.querySelector('input#array1')

    if (n0.value == '') {
        alert('Informe o nº')
        return
    }
    resp.innerHTML = ''

    let n = Number(n0.value)

    a.push(n)

    /*for (x = 0; x < a.length; x++) {
        if (x == 0) {
            p.innerHTML = `Sua array =  ${a[x]}`
        } else {
            p.innerHTML += `, ${a[x]}`
        }
        resp.appendChild(p)
        classifica.style.visibility = 'visible'
    } */

    for (x in a) {
        if (x == 0) {
            p.innerHTML = `Sua array tem ${a.length} item(s) e são: <br>${a[x]}`
        } else {
            p.innerHTML += `, ${a[x]}`
        }
        resp.appendChild(p)
        classifica.style.visibility = 'visible'
        pesquisa.style.visibility = 'visible'
    }


    n0.value = ''
}

function pesquisarArray() {
    let xPesq = document.querySelector('input#pesquisar1')
    let xPesquisa = Number(xPesq.value)
 
    let indexPesquisa = a.indexOf(xPesquisa)

    if(indexPesquisa >= 0) {
        resultPesquisa.innerHTML = `O item pesquisado existe e está no <strong>index ${indexPesquisa}</strong>`
    } else {
        resultPesquisa.innerHTML = `<strong>O item pesquisado não foi encontrado</strong>`
    }
}