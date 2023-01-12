console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

// dentro de uma função o this não aponta para exports
// mas aponta para a global
function logThis() {
    console.log('Dentro de uma finção...')
    console.log(this === exports)
    console.log(this === module.exports)
}
logThis()