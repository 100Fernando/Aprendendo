const voltar = document.querySelector('button#voltar')
const processar = document.querySelector('input#processar')
const passa = document.querySelector('button.prox1')

voltar.addEventListener('click', volta)
processar.addEventListener('click', processo)
passa.addEventListener('click', proximo)

function volta() {
    window.location = "exercicio1.html"
}

function processo() {
    const data = new Date()
    const anoAtual = data.getFullYear()
    const ano1 = document.querySelector('input#ano').value
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
            if(ano <= anoAtual && ano > 2020) {
                foto1.setAttribute('src', '../img/M3_2024.PNG')
            } else if (ano <=2020 && ano > 2010) {
                foto1.setAttribute('src', '../img/CIVIC_2010.png')
            } else if(ano <=2010 && ano > 2000) {
                foto1.setAttribute('src', '../img/MAREA_2000.png')
            } else if(ano <=2000 && ano > 1990) {
                foto1.setAttribute('src', '../img/SANTANA_90.png')
            } else if(ano <=1990 && ano > 1980) {
                foto1.setAttribute('src', '../img/OPALA_80.png')
            }else {
                foto1.setAttribute('src', '../img/ELSE.png')
            }
        } else {
            tipo = "Feminino"
            if(ano <= anoAtual && ano > 2020) {
                foto1.setAttribute('src', '../img/dolphin_2024.jpg')
            } else if (ano <=2020 && ano > 2010) {
                foto1.setAttribute('src', '../img/CHERRY_2019.png')
            } else if(ano <=2010 && ano > 2000) {
                foto1.setAttribute('src', '../img/BEETLE_2010.png')
            } else if(ano <=2000 && ano > 1990) {
                foto1.setAttribute('src', '../img/KA_90.png')
            } else if(ano <=1990 && ano > 1980) {
                foto1.setAttribute('src', '../img/FUSCA_80.png')
            }else {
                foto1.setAttribute('src', '../img/ELSE.png')
            }
        }
        resultado.innerHTML = `Há ${idade} atrás, esse era o carro ${tipo} do momento`
        resultado.appendChild(foto1)
        
    }

}

function proximo() {
    window.location = "../repeticoes/repeticoes1.html"
}