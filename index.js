import './style/comAmigo.css'
const setarPalavra = () => {
    document.getElementById('body').addEventListener('keydown', (ev) => {
        const palavra = document.getElementById('palavra').value; 
        const dica = document.getElementById('dica').value
        if (ev.key === 'Enter') { 
            if(palavra.value === '') {
                alert('digite um valor valido')
            }
            else {
                localStorage.setItem('palavra', palavra);
                localStorage.setItem('dica' , dica)
                location.href = 'main.html';
            }
        }
    });
};


setarPalavra();