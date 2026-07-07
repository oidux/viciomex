/*
  =============================================================================
  CARDÁPIO VÍCIO MEX — DADOS DO MENU
  =============================================================================
  Este é o ÚNICO arquivo que você precisa mexer para atualizar o cardápio.

  Como editar:
  - Para mudar um PREÇO, altere o texto entre aspas em "preco".
  - Para mudar uma DESCRIÇÃO, altere o texto em "desc".
  - Para ADICIONAR um item, copie um bloco { nome, preco, desc } inteiro
    (com a vírgula no final) e cole dentro da seção desejada.
  - Para REMOVER um item, apague o bloco { ... } inteiro dele.
  - Mantenha sempre as aspas "  " e as vírgulas , exatamente como estão.

  Dica: preço pode ser escrito como "R$35", "R$49,99", etc. — do jeito que
  você quer que apareça na tela.
  =============================================================================
*/

const CARDAPIO = {
  // ===========================================================================
  // ABA COMIDA
  // ===========================================================================
  comida: [
    {
      categoria: "Burritos",
      itens: [
        {
          nome: "Burrito de Carne",
          preco: "R$35",
          desc: "Carne desfiada bem temperada + queijo mussarela + chilli da casa + guacamole fresca + pico de gallo + mix crocante de cenoura e repolho + milho + sour cream + molho cheddar + salsa vermelha.",
        },
        {
          nome: "Burrito de Frango",
          preco: "R$35",
          desc: "Frango grelhado suculento + mussarela + chilli + guacamole + pico de gallo + verduras crocantes + milho + sour cream + cheddar + salsa vermelha.",
        },
      ],
    },
    {
      categoria: "Tacos",
      itens: [
        {
          nome: "Taco de Carne",
          preco: "R$15",
          desc: "Tortilha no caldo de carne, carne suculenta, queijo, cebola roxa, guacamole e pico de gallo. Sabor que bate diferente.",
        },
        {
          nome: "Taco de Frango",
          preco: "R$15",
          desc: "Tortilha com crosta de queijo, frango cremoso, guacamole, pico de gallo e milho.",
        },
        {
          nome: "Taco de Tilápia",
          preco: "R$15",
          desc: "Tortilha com crosta de pasta de alho, queijo, tilápia empanada e frita, guacamole, pico de gallo e picles de cebola roxa. Crocante, cremoso e viciante.",
        },
      ],
    },
    {
      categoria: "Quesadillas",
      itens: [
        {
          nome: "Quesadilla de Carne",
          preco: "R$39",
          desc: "Carne desfiada suculenta, mussarela derretida e toque de molho cheddar. Intensa, cremosa e cheia de sabor.",
        },
        {
          nome: "Quesadilla de Frango",
          preco: "R$39",
          desc: "Frango desfiado, mussarela e cream cheese, garantindo cremosidade e equilíbrio.",
        },
      ],
    },
    {
      categoria: "Botecagem Mexicana",
      itens: [
        {
          nome: "Frango Frito Crocante",
          preco: "R$49,99",
          desc: "500g de sassami empanado, crocante por fora e suculento por dentro.",
        },
        {
          nome: "Batata Mex — Carne Caliente ou Frango Crocante",
          preco: "R$49,99",
          desc: "Batata frita temperada + carne desfiada ou frango crocante + jalapeño + sour cream e molho cheddar.",
        },
        {
          nome: "Doriloko",
          preco: "R$35",
          desc: "Doritos + carne desfiada ou frango + cheddar + chilli + guacamole + sour cream + pico de gallo + queijo. A loucura crocante que nasceu na feira e viralizou.",
        },
        {
          nome: "Brocheta Contra-Filé Especial",
          preco: "R$39,99",
          desc: "Camadas de contra-filé com bacon, pimentão e cebola, grelhadas lentamente para realçar o sabor e a suculência. (Acompanha 2 tacos de alho, pico de gallo e guacamole.)",
        },
      ],
    },
    {
      categoria: "Smash",
      itens: [
        {
          nome: "Smash Duplo",
          preco: "R$25,99",
          desc: "Pão brioche, duas carnes smash bem seladas, cheddar derretido, cebola roxa, picles crocante e Molho Vício.",
        },
        {
          nome: "Smash Bacon",
          preco: "R$27,99",
          desc: "Pão brioche, duas carnes smash seladas, cheddar derretido, bacon crocante, cebola roxa, picles e Molho Vício.",
        },
        {
          nome: "Smash Salad",
          preco: "R$26,99",
          desc: "Pão brioche, duas carnes smash seladas, cheddar derretido, alface fresca, tomate, cebola roxa, picles e Molho Vício.",
        },
        {
          nome: "Smash Bacon Salad",
          preco: "R$28,99",
          desc: "Pão brioche, duas carnes smash bem seladas, cheddar derretido, bacon crocante, alface fresca, tomate, cebola roxa, picles e Molho Vício.",
        },
        {
          nome: "Smash Mex",
          preco: "R$35,99",
          desc: "Pão brioche, carne smash, cheddar, frango frito crocante com sweet chilli, coleslaw refrescante, sour cream e jalapeño.",
        },
        {
          nome: "4 Queijos & Bacon",
          preco: "R$34,99",
          desc: "Pão brioche, duas carnes smash, cheddar, catupiry, mussarela, cream cheese e bacon crocante.",
        },
      ],
      // Observação exibida no rodapé da seção (opcional).
      nota: "Adicional: + R$10 — Mini Doriloko ou Mini Batata MEX.",
    },
    {
      categoria: "MEXidão — Combos",
      itens: [
        {
          nome: "Combo TexMex",
          preco: "R$99,99",
          desc: "2 mini burritos + 1 mini doriloko + 2 mini brocheta + tacos de alho e queijo + 250g de buffalo wings. O combo dos indecisos — peça tudo, coma tudo, seja feliz.",
        },
        {
          nome: "Menu Degustação",
          preco: "R$99,99",
          desc: "2 mini burritos, 4 tacos, 1 mini doriloko, quesadilla de frango com cream cheese. Acompanha guacamole, salsa vermelha, jiló com jalapeño e caldo de carne.",
        },
      ],
    },
  ],

  // ===========================================================================
  // ABA BEBIDA
  // ===========================================================================
  bebida: [
    {
      categoria: "Drinks",
      itens: [
        {
          nome: "Caipirinha de Limão",
          preco: "R$15",
          desc: "Cachaça, limão e xarope de açúcar.",
        },
        {
          nome: "Caipirinha de Morango",
          preco: "R$18",
          desc: "Cachaça, morango e xarope de açúcar.",
        },
        {
          nome: "Caipirinha de Maracujá",
          preco: "R$18",
          desc: "Cachaça, maracujá e xarope de açúcar.",
        },
        {
          nome: "Mojito de Limão",
          preco: "R$18",
          desc: "Rum, suco de limão fresco, hortelã macerada, açúcar e água com gás.",
        },
        {
          nome: "Mojito de Manga",
          preco: "R$20",
          desc: "Rum, suco de limão fresco, hortelã, manga, açúcar e água com gás.",
        },
        {
          nome: "Michelada",
          preco: "R$18",
          desc: "Cerveja, limão, molho inglês e molho de pimenta, com borda de sal e pimenta chilli.",
        },
        {
          nome: "Xeque-Mate Vico",
          preco: "R$20",
          desc: "Rum, sour mix, Chá Matte e guaraná.",
        },
        {
          nome: "Margarita Frozen",
          preco: "R$25",
          desc: "Nos sabores: morango c/ gengibre, cajá lemon ou curaçau blue.",
        },
        {
          nome: "Moscow Mule",
          preco: "R$20",
          desc: "Vodka, sour mix e espuma de gengibre.",
        },
        {
          nome: "Cenoura & Bronze",
          preco: "R$25",
          desc: "Suco de laranja com cenoura, sour mix, café, tequila e espuma de gengibre.",
        },
        {
          nome: "Rolê na Praia",
          preco: "R$20",
          desc: "Gin, sour mix, picolé de cajá, xarope de framboesa e mel.",
        },
        {
          nome: "Calypso",
          preco: "R$25",
          desc: "Cachaça de jambu, maracujá, sour mix e espuma de cupuaçu.",
        },
        {
          nome: "Burgesa Safada",
          preco: "R$25",
          desc: "Vodka, sour mix, purê de frutas vermelhas e espuma de cajá.",
        },
      ],
    },
    {
      categoria: "Shots",
      itens: [
        {
          nome: "Lambida de Cachorro",
          preco: "R$20",
          desc: "Borda de lemon pepper, tequila e suco de manga.",
        },
        {
          nome: "La Bandera",
          preco: "R$20",
          desc: "Grenadine, rum de coco e licor de melão.",
        },
        {
          nome: "Fuego",
          preco: "R$20",
          desc: "Grenadine, curaçau blue e tequila.",
        },
      ],
    },
    {
      categoria: "Sucos",
      itens: [
        {
          nome: "Sucos Naturais",
          preco: "R$18",
          desc: "Morango, maracujá, abacaxi, manga, cajá e cupuaçu.",
        },
      ],
    },
    {
      categoria: "Refrigerantes & Águas",
      itens: [
        { nome: "Coca-Cola", preco: "R$8", desc: "" },
        { nome: "Guaraná", preco: "R$8", desc: "" },
        { nome: "Pepsi Black", preco: "R$7", desc: "" },
        { nome: "Água com Gás", preco: "R$6", desc: "" },
        { nome: "Água sem Gás", preco: "R$5", desc: "" },
        { nome: "Chá Gelado", preco: "R$10", desc: "Pêssego ou limão." },
      ],
    },
    {
      categoria: "Cervejas",
      itens: [
        { nome: "Amstel 600ml", preco: "R$13,90", desc: "" },
        { nome: "Brahma 600ml", preco: "R$12,90", desc: "" },
        { nome: "Petra 600ml", preco: "R$10", desc: "" },
      ],
    },
  ],
};
