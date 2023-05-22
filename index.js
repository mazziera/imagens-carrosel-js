const imagens = document.querySelectorAll('.slide'); 

const setaVoltar = document.getElementById('seta-voltar');

const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {
    
    if(imagemAtual === imagens.length) {
        return imagens.length -1;
    }

    esconderImagemAberta();
    mostrarProximaImagem();
    mostrarOuEsconderSetas();

});


function esconderImagemAberta() {
    let imagemAberta = document.querySelector('.imagem-atual');

    imagemAberta.classList.remove('imagem-atual');
}

function mostrarProximaImagem() {

    imagens[imagemAtual].classList.add('imagem-atual');

    imagemAtual++
}

function mostrarOuEsconderSetas(){
    const naoEaPrimeiraImagem = imagemAtual;

    if(imagemAtual !== 0) {
        setaVoltar.classList.remove('opacidade');
    } else {
        setaVoltar.classList.add('opacidade');
    }

    const ehAultimaImagem = imagemAtual;

    if(imagemAtual !== 0 && imagemAtual == imagens.length){
        setaAvancar.classList.add('opacidade');
    } else{
        setaAvancar.classList.remove('opacidade');
    }
}

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0) {
        return imagemAtual;
    }
    
    esconderImagemAberta();

    imagemAtual --
    imagens[imagemAtual].classList.add('imagem-atual');

    mostrarOuEsconderSetas();
});