const alunos = [ 
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// desafio 1: Todos os alunos são bolsistas 
const resultado = alunos.map(a => a.bolsista).reduce(function(e) {
    if(e === true) {
        return true
    } else {
        return false
    }
})
console.log(resultado)
// ### CORRETO ###
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: algum aluno é bolsista ?
// const resultado3 = alunos.map(a => a.bolsista).reduce(function(e) {
//     const bols = aluno => aluno.bolsista === true
//     return e.filter(bols)
// })
// console.log(resultado3)
// ### CORRETO ###
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))