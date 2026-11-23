const botaoOmnitrix = document.getElementById('omnitrix-botao');
const luzOmnitrix = document.getElementById('luz-omnitrix-botao');
const alienOmnitrix = document.querySelector('.alien-section').closest('.mobile-swiper');
const conjunto = document.getElementById('todo-omnitrix');
const posicaoInicial = conjunto.style.marginTop

botaoOmnitrix.addEventListener('click', () => {
  if(luzOmnitrix.style.visibility && alienOmnitrix.style.visibility === 'visible'){
    luzOmnitrix.style.visibility = 'hidden';
    alienOmnitrix.style.visibility = 'hidden';
    conjunto.style.marginTop = posicaoInicial;
    conjunto.style.transition = '1s ease';
  }else{
    luzOmnitrix.style.visibility = 'visible';
    alienOmnitrix.style.visibility = 'visible';
    conjunto.style.marginTop = '0';
    conjunto.style.transition = '1s ease';
  }
});

luzOmnitrix.addEventListener('click', () => botaoOmnitrix.click());

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    prevEl: '.mySwiper .swiper-button-prev',
    nextEl: '.mySwiper .swiper-button-next'
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      centeredSlides: true
    }
  }
});

const giro = document.querySelector('.img-omnitrix-centro');
let rotacao = 0;

giro.style.transition = 'transform 0.3s ease';

swiper.on('slidePrevTransitionStart', () => {
  rotacao += 90;
  giro.style.transform = `rotate(${rotacao}deg)`;
});

swiper.on('slideNextTransitionStart', () => {
  rotacao -= 90;
  giro.style.transform = `rotate(${rotacao}deg)`;
}); //pego pela IA
