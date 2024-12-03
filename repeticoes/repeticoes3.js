const voltar = document.querySelector('button#voltar')
const proce = document.querySelector('button#proc')
let divResult = document.querySelector('div#resp')

voltar.addEventListener('click', volta)
proce.addEventListener('click', gerarPasso)

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
    const passo = Number(pas.value)

    let result = document.createElement('p')


        for (x = inicio; x <= fim; x += passo) {

            result.innerHTML += `😩💭 ${x} <br>`
            
        }
        result.innerHTML += ' 😜👌'

        divResult.appendChild(result)
    }

}
