const voltar = document.querySelector('button#voltar')
const proce = document.querySelector('button#proc')
let divResult = document.querySelector('div#resp')
const prox = document.querySelector('button.prox1')

voltar.addEventListener('click', volta)
proce.addEventListener('click', gerarPasso)
prox.addEventListener('click', () => {
    window.location = "repeticoes4.html"
})

function volta() {
    window.location = "repeticoes2.html"
}



function gerarPasso() {
    if (inicio == '' || fim == '' || passo == '') {
        alert('Insira os dados primeiro!')
    } else {
        const ini = document.querySelector('input#inicio')
        const fi = document.querySelector('input#fim')
        const pas = document.querySelector('input#passo')
        const inicio = Number(ini.value)
        const fim = Number(fi.value)
        let passo = Number(pas.value)

        if (passo == 0) {
            alert('Atenção! O Passo não pode ser 0. Vamos considerar o passo sendo 1')
            passo = 1
        }

        let result = document.createElement('p')

        if (inicio < fim) {
            for (x = inicio; x <= fim; x += passo) {

                result.innerHTML += `😩💭 ${x} <br>`

            }
        } else {
            for (x = inicio; x >= fim; x -= passo) {

                result.innerHTML += `😩💭 ${x} <br>`
            }
        }
        result.innerHTML += ' 😜👌'

        divResult.appendChild(result)
    }

}
