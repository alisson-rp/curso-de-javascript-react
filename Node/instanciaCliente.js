const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()
// exportado do node que faz cache
contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)

// exportado do node criando novas instancias com factory
contadorC.inc()
contadorC.inc()

console.log(contadorD.valor)
