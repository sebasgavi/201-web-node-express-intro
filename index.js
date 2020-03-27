const express = require('express');

const app = express();

app.get('/', function (request, response) {
  console.log('hola en la consola');
  response.send('hola en chrome');
});

app.get('/contacto', function (request, response) {
  console.log('hola en contacto');
  response.send('página de contacto');
});

app.get('/sobre-nosotros', function (req, res) {
  res.send('Texto bien chévere sobre esta empresa.');
});

app.listen(3000, function () {
  console.log('servidor iniciado en puerto 3000');
});

// npm = node package manager
// npx = node package executer