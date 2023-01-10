// aqui constante é o endereço de memoria 
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'

console.log(pessoa.nome)

// criando o objeto para ja ser constante
const pessoaConstante = Object.freeze({ nome:'Joao'})
console.log(pessoaConstante)