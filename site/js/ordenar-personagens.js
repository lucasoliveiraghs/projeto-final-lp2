const ordenador = document.getElementById("ordenador");
const containerPersonagens = document.querySelector(".personagens");

if (ordenador && containerPersonagens) {
  const ordemOriginal = Array.from(containerPersonagens.children);

  ordenador.addEventListener("change", () => {
    const personagens = ordemOriginal.slice();
    if (ordenador.value === "nome") {
      personagens.sort((a, b) => {
        const nomeA = a.querySelector(".titulo-personagens")?.textContent.trim() ?? "";
        const nomeB = b.querySelector(".titulo-personagens")?.textContent.trim() ?? "";
        return nomeA.localeCompare(nomeB);
      });
    }

    personagens.forEach((personagem) => containerPersonagens.appendChild(personagem));
  });
}
 //pego pelo BulmaCSS