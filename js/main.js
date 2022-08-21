$('.slider-principal').slick({
    dots: true,
    infinite: false,
    speed:700,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
});


const btnMobile = document.getElementById('btn-mobile');

function activeMneu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', activeMneu)


