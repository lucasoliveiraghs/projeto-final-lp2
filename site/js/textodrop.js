document.querySelectorAll(".personagens > div").forEach((personagem) => {
    const imagem = personagem.querySelector(".img-personagem");
    const texto = personagem.querySelector(".desc");
    const link = imagem?.closest("a");

    if (!imagem || !texto) return;

    (link || imagem).addEventListener("click", (evento) => {
      evento.preventDefault();
      texto.classList.toggle("visivel");
    });
  });