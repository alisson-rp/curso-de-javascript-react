const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true}))

app.post('/usuarios',(req, resp) => {
    console.log(req.body)
    resp.send('Parabéns. Usuário Incluido')
})

app.post('/usuarios/:id',(req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('Parabéns. Usuário Alterado!')
})


app.listen(3003)

// startar server ctrl+alt+N