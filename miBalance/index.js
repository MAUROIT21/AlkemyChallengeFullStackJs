const express = require('express')
const app = express()


//Settings
app.set('appName', 'Balance Personal')
app.set('HostName', '127.0.0.1')
app.set('Port', 8002)
app.set('view engine', 'ejs')

// Middlewares
app.use(express.json())

// RUTAS


app.get('/actual', (req, res) => {
    console.log('Get request to server')
    res.render('actual.ejs')
})

app.get('/operaciones', (req, res) => {
    console.log('Get request de ABM operaciones')
    res.render('operaciones.ejs')
})

app.post('/transaction', (req, res) => {
    console.log('Post request de transaction')
    res.send('Transaccion realizada')
})

app.put('/transaction/:transactionId', (req, res) => {
    console.log('Put de transaction')
    res.send('Transaccion actualizada')
})


app.listen(port = app.get('Port'), host = app.get('HostName'), () => {
    console.log('AppName: ', app.get('appName'))
    console.log(`Server corriendo en http://${host}:${port}/`);
  }) 
