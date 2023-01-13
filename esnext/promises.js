function falaeDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos = 1000) 
    })
}

falaeDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log( outraFrase))
    .catch(e => console.log(e))