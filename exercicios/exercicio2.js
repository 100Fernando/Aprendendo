const voltar = document.querySelector('button#voltar')
const processar = document.querySelector('input#processar')

voltar.addEventListener('click', volta)
processar.addEventListener('click', processo)

function volta() {
    window.location = "exercicio1.html"
}

function processo() {
    const data = new Date()
    const anoAtual = data.getFullYear()
    const ano1 = document.querySelector('input#ano')
    const ano = Number(ano1.value)
    const resultado = document.querySelector('div#resultados')
    if(ano == 0 || ano > anoAtual) {
        alert("Verifique os dados informados")
    } else {
        const estilo = document.getElementsByName('radtype')
        const idade = anoAtual - ano
        let tipo = ''
        let foto1 = document.createElement('img')
        foto1.setAttribute('id', 'foto')
        if(estilo[0].checked) {
            tipo = "Masculino"
            if(ano < anoAtual && ano > 2020) {
                foto1.setAttribute('src', '../img/Civic.png')
            }
        } else {
            tipo = "Feminino"
        }
        resultado.innerHTML = `Há ${idade} atrás, esse era o carro ${tipo} do momento`
        resultado.appendChild(foto1)
        
    }

}