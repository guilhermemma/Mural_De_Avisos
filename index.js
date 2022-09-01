const PORT = 8080;
const express = require('express');
const app = express();
const apiRota = require('./rotas/api') 
const path = require('path')


app.use('/api', apiRota)
app.use('/', express.static(path.join(__dirname, "public")))



app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT)
})

