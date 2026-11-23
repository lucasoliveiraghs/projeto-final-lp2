document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

}); //pego pelo BulmaCSS

document.addEventListener('click', (e) => {
  // Abre o modal se o elemento clicado tiver data-open-modal
  const openBtn = e.target.closest('[data-open-modal]');
  if (openBtn) {
    document.getElementById(openBtn.dataset.openModal)?.classList.add('is-active');
  }

  // Fecha o modal pai se clicar em qualquer elemento com data-close-modal
  if (e.target.closest('[data-close-modal]')) {
    e.target.closest('.modal')?.classList.remove('is-active');
  }
});

// Fecha qualquer modal aberto com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal.is-active')?.classList.remove('is-active');
  }
}); //pego pela IA

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

const botaoMenu = document.getElementById("menu-mobile");
const menu = document.querySelector(".conteudo-direita-nav");
const links = document.querySelectorAll("#links-nav a");

botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");

    botaoMenu.classList.toggle("ativo", aberto);
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
        botaoMenu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
}); //pego pelo modelo do site cinquentinha

const benpers = document.getElementById('img-ben');
const descben = document.getElementById('desc-ben');

benpers.addEventListener('click', () => {
  if(descben.style.display === 'none'){
    descben.style.display = 'flex';
  }else{
    descben.style.display = 'none';
  }
});
