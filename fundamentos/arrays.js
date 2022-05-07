const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0],valores[3]);
console.log(valores[4]);

valores[4] =  10;// add mais um elemento na posição 4
console.log(valores);
console.log(valores.length); // tras a quantidade elementos tem no array
valores.push({id: 3}, false, null, 'teste'); //add mais elementos ao array
console.log(valores); 

console.log(valores.pop());// retira o ultimo elemento do array 
delete valores[0]; // deleta a primeiro posição
console.log(valores);

console.log(typeof valores);
