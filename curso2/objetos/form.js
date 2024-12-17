function controleForm() {
    const form = document.querySelector('form#form1')
    const res = document.querySelector('div#res')

    const cadastro = []

    function eventoForm(evento) {

        evento.preventDefault()

        const nome = form.querySelector('#nome')
        const sobrenome = form.querySelector('#sobrenome')
        const idade = form.querySelector('#idade')

        cadastro.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value
        })
         res.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${idade.value}</p>`
    }

    form.addEventListener('submit', eventoForm)

   

    console.log(cadastro)

}

controleForm()