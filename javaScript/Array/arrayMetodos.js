const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove ultimo elemento do array 
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos) // add ultimo elemento do array

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // add na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elemento
// adiciona
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)