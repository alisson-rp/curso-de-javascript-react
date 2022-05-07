let a = 7;
let b = 94;

d = a;
c = b;
a = c;
b = d;

console.log(a);
console.log(b);

// correção e jeito mais simples de trocar uma vareavel 
//let temp = a;
//a = b;
//b = temp; 
// tambem tem esta forma 
// [a,b] = [b,a]