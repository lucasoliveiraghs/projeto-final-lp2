const section = document.querySelector(".section-personagens");
const espacoSection = "40rem";

document.querySelectorAll(".personagens > div").forEach((personagem) => {
    const imagem = personagem.querySelector(".img-personagem");
    const texto = personagem.querySelector(".desc");
    const link = imagem?.closest("a");

    if (!imagem || !texto) return;

    (link || imagem).addEventListener("click", (evento) => {
      evento.preventDefault();
      texto.classList.toggle("visivel");
      texto.style.transition = '1s ease';

      if (section) {
        if (
          window.matchMedia("(min-width: 1440px)").matches &&
          document.querySelector(".desc.visivel")
        ) {
          section.style.paddingBottom = espacoSection;
        } else {
          section.style.paddingBottom = "";
        }
      }
    });
  });
