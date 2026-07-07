/*
  =============================================================================
  VÍCIO MEX — LÓGICA DO CARDÁPIO
  Renderiza o menu a partir de CARDAPIO (menu.js), controla as abas
  Comida/Bebida, os chips de categoria e o botão "voltar ao topo".
  Normalmente você NÃO precisa mexer aqui — só em menu.js.
  =============================================================================
*/

(function () {
  const menuEl = document.getElementById("menu");
  const chipsEl = document.getElementById("chips");
  const tabs = document.querySelectorAll(".tab");
  const toTop = document.getElementById("toTop");

  let abaAtual = "comida";

  // Cria um "slug" simples para usar como id de âncora.
  function slug(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  // Monta o HTML de um único item.
  function itemHTML(item) {
    const desc = item.desc
      ? `<p class="item__desc">${item.desc}</p>`
      : "";
    return `
      <div class="item">
        <div class="item__head">
          <span class="item__name">${item.nome}</span>
          <span class="item__leader"></span>
          <span class="item__price">${item.preco}</span>
        </div>
        ${desc}
      </div>`;
  }

  // Monta o HTML de uma seção (categoria).
  function sectionHTML(secao) {
    const id = slug(secao.categoria);
    const itens = secao.itens.map(itemHTML).join("");
    const nota = secao.nota
      ? `<p class="section__note">${secao.nota}</p>`
      : "";
    return `
      <section class="section" id="sec-${id}">
        <h2 class="section__title">${secao.categoria}</h2>
        <div class="section__rule"></div>
        ${itens}
        ${nota}
      </section>`;
  }

  // Renderiza a aba escolhida.
  function render(aba) {
    abaAtual = aba;
    const dados = CARDAPIO[aba] || [];

    menuEl.innerHTML = dados.map(sectionHTML).join("");

    // Reconstrói os chips de categoria.
    chipsEl.innerHTML = dados
      .map(
        (s) =>
          `<button class="chip" data-target="sec-${slug(
            s.categoria
          )}">${s.categoria}</button>`
      )
      .join("");

    // Atualiza o estado visual das abas.
    tabs.forEach((t) =>
      t.classList.toggle("is-active", t.dataset.tab === aba)
    );
    tabs.forEach((t) =>
      t.setAttribute("aria-selected", t.dataset.tab === aba ? "true" : "false")
    );

    // Sobe para o topo do menu ao trocar de aba.
    window.scrollTo({ top: 0, behavior: "auto" });
    markActiveChip();
  }

  // Marca o chip da categoria visível no topo da tela.
  function markActiveChip() {
    const secoes = [...menuEl.querySelectorAll(".section")];
    const chips = [...chipsEl.querySelectorAll(".chip")];
    if (!secoes.length) return;

    let ativa = secoes[0].id;
    for (const s of secoes) {
      if (s.getBoundingClientRect().top <= 150) ativa = s.id;
    }
    chips.forEach((c) =>
      c.classList.toggle("is-active", c.dataset.target === ativa)
    );
  }

  // --- Eventos --------------------------------------------------------------

  // Trocar de aba.
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => render(tab.dataset.tab))
  );

  // Clique nos chips: rolar até a categoria.
  chipsEl.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const alvo = document.getElementById(chip.dataset.target);
    if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Botão voltar ao topo + chip ativo conforme rolagem.
  window.addEventListener(
    "scroll",
    () => {
      toTop.hidden = window.scrollY < 400;
      markActiveChip();
    },
    { passive: true }
  );

  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // --- Início ---------------------------------------------------------------
  render("comida");
})();
