import './style/sozinho.css'
const start = document.getElementById('start')

const troca = () => {
    start.addEventListener('click', () => {
            let select = document.getElementById('select');
	        let value = select.options[select.selectedIndex].value;
            localStorage.setItem('valor', value)
            location.href = 'tela.html'
    })
}

troca()