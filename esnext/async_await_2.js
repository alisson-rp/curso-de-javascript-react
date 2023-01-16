
function gerarNumerosEntre(min, max, numProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min 
        if(numProibidos.includes(aleatorio)) {
            reject('Numero repitido')
        } else {
            resolve(aleatorio)
        }
        
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try{    
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(gerarNumerosEntre(1, 60, numeros ))
        }
        return numeros
    } catch {
        if(trntativas > 100) {
            throw 'Não deu certo!'
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)

