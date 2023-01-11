const escola = "cod3r"

console.log(escola.charAt(4));// traz caracter da posição 4 
console.log(escola.charAt(5));// não da erro mas traz vazio 
console.log(escola.charCodeAt(3));// traz o codigo 
console.log(escola.indexOf('3'));// traz em que indice esta o meu digito 
console.log(escola.substring(1));// imprime do primeiro ao final 
console.log(escola.substring(0, 3));//imprime do 0 ao 2

console.log('Escole'.concat(escola).concat("!"));// concatena strings
console.log(escola.replace(3, 'e'));// substitui a terceira posição 'e'

console.log('Ana,Maria,Pedro'.aplit(',')); // transforma em vetor