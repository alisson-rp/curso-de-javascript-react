// Função em JS é First-Class Object (Citizens)
// Higher-order function 

// criar de forma literal
function fun1() {}

// armazenar em uma variavel 
const fun2 = function () {} // função anonima atribuida a uma variavel 

// Armazenar em um array 
const array = [function (a,b) {return a + b}, fun1, fun2]