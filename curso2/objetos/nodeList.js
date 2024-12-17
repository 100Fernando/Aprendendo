const paragrafos = document.querySelector('div#paragrafos')
const p = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundEstilo = estiloBody.backgroundColor

console.log(backgroundEstilo)
console.log(p)


for (let i of p) {
    i.style.backgroundColor = backgroundEstilo;
    i.style.color = '#FFFFFF';
}