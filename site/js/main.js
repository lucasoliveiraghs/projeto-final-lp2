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