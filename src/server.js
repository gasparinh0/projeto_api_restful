//A boa prática é sempre chamar as dependencias que foram instaladas, depois as qual você criou no projeto.
//dependencias instaladas
const express = require('express');
//const path = require('path');

//dependencias criadas
const db = require('./database/db');
const routes = require('./routes/routes');

const app = express();

//conexão com o banco de dados
db.connect()

//Habilitada o server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

//Definindo as rotas
app.use('/api', routes)

//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))