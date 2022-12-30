const express = require('express')
const app = express() // uma boa pratica


//Rota
    // Method HTTP - CRUD (Creat, Read, Update, Delete)
        // Get - Pega info
        // Post - Cria uma Inf
        // Put - Change all inf
        // Path - Change half inf
        // Delete - Delete inf. 
    // Name (Rota)
    // Funciton (Callback)
//exemplo
//app.get('/', (req, res) => { //isto e similar a "function (req, res)" cod fica limpo, boa pratica e mais utilizado
//  res.send('Hello World')
//})

// Name - identify one the route

// Function (CallBack) - Responsible for excution some command. Every funciton within a funciton is known as a CallBack
// Route - route can do anything +, -, /, *, if, else, while, anything.
app.get("/route", (req, res) => {})

app.listen(3000)

/*instalando pacote para sempre atualizar o servidor local 'npm i nodemon' */
/*Para rodar tem que ser "npm run dev" por ser um script personalizado o*/
/*'dev' pode ser modificado como queira*/