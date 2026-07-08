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
        <div class="item__row">
          <h3 class="item__name">${item.nome}</h3>
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
        <div class="section__accent"></div>
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
    chipsEl.scrollLeft = 0;
    ultimaAtiva = null;
    markActiveChip();
  }

  // Altura aproximada da barra fixa (abas + categorias).
  const HEADER = 150;
  let ultimaAtiva = null;

  // Rola a barra de categorias para deixar o chip ativo sempre visível.
  function garantirChipVisivel(chip) {
    const c = chipsEl;
    const alvo = chip.offsetLeft - (c.clientWidth - chip.clientWidth) / 2;
    c.scrollTo({ left: Math.max(0, alvo), behavior: "smooth" });
  }

  // Deixa o chip informado como ativo (e garante que ele apareça na barra).
  function setActiveChip(id) {
    chipsEl.querySelectorAll(".chip").forEach((c) =>
      c.classList.toggle("is-active", c.dataset.target === id)
    );
    if (id !== ultimaAtiva) {
      ultimaAtiva = id;
      const chip = chipsEl.querySelector('.chip[data-target="' + id + '"]');
      if (chip) garantirChipVisivel(chip);
    }
  }

  // Marca o chip da categoria visível no topo da tela.
  function markActiveChip() {
    const secoes = [...menuEl.querySelectorAll(".section")];
    if (!secoes.length) return;

    let ativa = secoes[0].id;
    for (const s of secoes) {
      if (s.getBoundingClientRect().top <= HEADER) ativa = s.id;
    }

    // Perto do fim da página, a última seção pode nunca chegar ao topo —
    // então forçamos ela como ativa para o chip não ficar "sem seleção".
    const fim =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (fim) ativa = secoes[secoes.length - 1].id;

    setActiveChip(ativa);
  }

  // --- Eventos --------------------------------------------------------------

  // Trocar de aba.
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => render(tab.dataset.tab))
  );

  // Clique nos chips: rolar até a categoria e já marcá-la como ativa
  // (não depende só da rolagem, evitando categorias do fim ficarem sem seleção).
  chipsEl.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const alvo = document.getElementById(chip.dataset.target);
    if (!alvo) return;
    setActiveChip(chip.dataset.target);
    alvo.scrollIntoView({ behavior: "smooth", block: "start" });
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

/*
  =============================================================================
  POPUP DE PROMOÇÃO
  Aparece ao abrir o cardápio: carrossel de imagens (arrasta pro lado) +
  botões "Quero saber mais" (Instagram) e "Ver o cardápio" (fecha).
  =============================================================================
*/
(function () {
  const promo = document.getElementById("promo");
  if (!promo) return;

  const track = document.getElementById("promoTrack");
  const dotsEl = document.getElementById("promoDots");
  const btnClose = document.getElementById("promoClose");
  const btnContinue = document.getElementById("promoContinue");
  const slides = [...track.querySelectorAll(".promo__slide")];

  // Efeito de "afundar" no toque: dispara assim que o dedo encosta (não depende
  // do :active, que no iOS só aparece num aperto firme). Mantém por um instante
  // para que o efeito seja visível mesmo num toque rápido.
  promo.querySelectorAll(".promo__btn").forEach((btn) => {
    const press = () => btn.classList.add("is-pressing");
    const release = () => setTimeout(() => btn.classList.remove("is-pressing"), 130);
    btn.addEventListener("pointerdown", press);
    btn.addEventListener("pointerup", release);
    btn.addEventListener("pointerleave", release);
    btn.addEventListener("pointercancel", release);
  });

  // Cria as bolinhas de posição, uma por imagem.
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "promo__dot" + (i === 0 ? " is-active" : "");
    dotsEl.appendChild(dot);
  });
  const dots = [...dotsEl.children];

  // Atualiza a bolinha ativa conforme o carrossel é arrastado.
  track.addEventListener(
    "scroll",
    () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((d, k) => d.classList.toggle("is-active", k === i));
    },
    { passive: true }
  );

  // Abre/fecha.
  function abrir() {
    promo.classList.remove("is-hidden");
    document.body.classList.add("promo-open");
  }
  function fechar() {
    promo.classList.add("is-hidden");
    document.body.classList.remove("promo-open");
  }

  btnContinue.addEventListener("click", fechar);
  btnClose.addEventListener("click", fechar);
  // Clicar fora do card (no fundo escuro) também fecha.
  promo.addEventListener("click", (e) => {
    if (e.target === promo) fechar();
  });
  // Tecla Esc fecha.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !promo.classList.contains("is-hidden")) fechar();
  });

  // Mostra ao abrir a página.
  abrir();
})();
