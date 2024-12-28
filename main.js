import './style/main.css'
const palavraRecuperada = localStorage.getItem('palavra');
const dica = localStorage.getItem('dica')
const ajuda = document.getElementById('ajuda')
const letras = document.getElementById('letras')
const button = document.querySelectorAll('#button button')
const reiniciar = document.getElementById('reiniciar')
const resultado = document.querySelector('#result p')
const result = document.querySelector('#result')
const arry = [...palavraRecuperada]
const valores = []
let erros = 0

arry.forEach(item => {
    const div = document.createElement('div')
    div.id = 'divCriada'
    div.value = item
    letras.appendChild(div)
    ajuda.innerText = dica
})


button.forEach(btn => {
    btn.addEventListener('click', ev => {
        ev.preventDefault()
        const valor = btn.dataset.letra
            if(arry.includes(valor)) {
                const div = document.querySelectorAll('#divCriada')
                div.forEach(item => {
                    if(item.value === valor) {
                        valores.push(valor)
                        item.innerText = valor
                        item.style.backgroundColor = '#ffffff00'
                        btn.style.backgroundColor = '#04ff00'
                    }
                    
                })
                if(valores.length === palavraRecuperada.length) {
                    estado('ganhou')
                }
                
            }
            else {
                btn.style.backgroundColor = 'red'
                btn.setAttribute('disabled', 'true')
                erros++
                const div = document.querySelectorAll('#boneco div')
                if(erros === 1) {
                    div[0].setAttribute('class', 'cabeca')
                }
            if(erros === 2) {
                div[1].setAttribute('class', 'corpo')
            }
            if(erros === 3) {
                div[2].setAttribute('class', 'bracoE')
            }
            if(erros === 4) {
                div[3].setAttribute('class', 'bracoD')
            }
            if(erros === 5) {
                div[4].setAttribute('class', 'peE')
            }
            if(erros === 6) {
                div[5].setAttribute('class', 'peD')
                estado('perdeu')
                button.forEach(item => item.setAttribute('disabled', 'true'))
            }
            }
    })
})


function estado(voce) {
    resultado.innerText = 'voce ' + voce + '!'
    result.style.display = 'block'
}

reiniciar.addEventListener('click', () => {
    location.href = 'index.html';
})


