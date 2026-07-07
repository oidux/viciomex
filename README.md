# Vício Mex — Cardápio Digital

Cardápio digital do **Vício Mex / MEXidão** — comida mexicana com pegada de
boteco. É um site simples, responsivo (feito para o celular) e pronto para
virar um **QR code** na mesa.

## Como funciona

O site tem duas abas — **Comida** e **Bebida** — e chips para pular direto
para cada categoria (Burritos, Tacos, Smash, Drinks, etc.).

Arquivos do projeto:

| Arquivo       | Para que serve                                                    |
| ------------- | ----------------------------------------------------------------- |
| `menu.js`     | **Os dados do cardápio** (nomes, preços, descrições). Edite aqui. |
| `index.html`  | A estrutura da página. Normalmente não precisa mexer.             |
| `styles.css`  | As cores e o visual da marca.                                     |
| `app.js`      | A lógica (abas, chips, rolagem). Não precisa mexer.               |

## Como atualizar o cardápio (preços, itens, descrições)

Abra **`menu.js`** — é o único arquivo que você precisa mexer no dia a dia.

- **Mudar um preço:** altere o texto em `preco`, ex.: `preco: "R$39"`.
- **Mudar uma descrição:** altere o texto em `desc`.
- **Adicionar item:** copie um bloco `{ nome, preco, desc }` inteiro (com a
  vírgula) e cole dentro da categoria desejada.
- **Remover item:** apague o bloco `{ ... }` inteiro dele.

Mantenha sempre as aspas `" "` e as vírgulas `,` no lugar.

## Importante ao publicar mudanças (cache)

O `index.html` carrega os arquivos com um número de versão, ex.:
`styles.css?v=2`, `menu.js?v=2`. Isso força o navegador a baixar a versão
nova em vez de usar uma cópia antiga guardada (cache).

**Sempre que você atualizar o cardápio ou o visual, aumente esse número**
em todos eles no `index.html` (de `?v=2` para `?v=3`, depois `?v=4`, e assim
por diante). Se não aumentar, quem já visitou pode continuar vendo a versão
antiga por até ~10 minutos.

## Como ver no computador

É só abrir o arquivo `index.html` no navegador (duplo clique). Precisa estar
conectado à internet só para carregar as fontes.

## Como publicar de graça (GitHub Pages)

1. No GitHub, vá em **Settings → Pages**.
2. Em **Source**, escolha a branch `main` e a pasta `/ (root)`.
3. Salve. Em alguns minutos o site fica no ar num endereço tipo
   `https://oidux.github.io/viciomex/`.

Depois é só gerar um **QR code** apontando para esse endereço (qualquer gerador
de QR gratuito serve) e imprimir para as mesas.

## Cores da marca

Definidas no topo do `styles.css` (em `:root`): vermelho, verde, amarelo e o
off-white do texto. Mudou ali, muda no site inteiro.
