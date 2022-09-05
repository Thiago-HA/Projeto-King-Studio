const btnMobile = document.getElementById('btn-mobile');

function activeMneu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

    if (nav.classList.contains('active') == true) {
        alterarImagem("icon-menu","./img/icon-close-menu.png");
    }else{
        alterarImagem("icon-menu","./img/icon-menu.png");
    }
}

btnMobile.addEventListener('click', activeMneu)
 


function alterarImagem(id_objeto, caminhoNovaImagem){
    document.getElementById(id_objeto).src = caminhoNovaImagem;
}