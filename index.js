const express = require('express')
const app = express() // uma boa pratica

app.get('/', (req, res) => { //isso e similar a "function (req, res)" cod fica limpo, boa pratica e mais utilizado
  res.send('Hello World')
})

app.listen(3000)

/*instalando pacote para sempre atualizar o servidor local 'npm i nodemon' */
/*Para rodar tem que ser "npm run dev" por ser um script personalizado o*/
/*'dev' pode ser modificado como queira*/