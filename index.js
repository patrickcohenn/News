const express = require('express');
const app = express(); // uma boa pratica
const connetcDatabase = require("./src/database/db");
const userRoute = require("./src/routes/user.route");
const port = 3000;

connetcDatabase()

app.use(express.json()); //application adapted to send and receive .json files
app.use("/user", userRoute);

app.listen(port, () => console.log('Servidor rodando na porta %d', port)); //msg para mostrar que esta rodando serve

//Rota
    // Method HTTP - CRUD (Creat, Read, Update, Delete)
        // Get - Pega info
        // Post - Cria uma Inf
        // Put - Change all inf
        // Pacth - Change half inf
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
//app.get("/route", (req, res) => {})



/*instalando pacote para sempre atualizar o servidor local 'npm i nodemon' */
/*Para rodar tem que ser "npm run dev" por ser um script personalizado o*/
/*'dev' pode ser modificado como queira*/