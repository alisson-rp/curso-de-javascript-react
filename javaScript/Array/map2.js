const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os precos
// converte JSON para Object
const paraObjeto = json => JSON.parse(json)
// tras somente o preco
const apenasPreco = produto => produto.preco
// usa o map para montar o novo array
let resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)