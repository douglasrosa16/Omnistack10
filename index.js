const express = require('express');

const app = express(); //Criando aplicação

app.use(express.json()); //Para o app reconhecer requisições .json

//Métodos HTTP: GET, POST, PUT, DELETE
//Query Params: request.query (Filtros, ordenação, paginação,...) - GET
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//Mon
app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello Omnistack' });
}) ;

app.listen(3333);//localhost:3333 (minha porta)