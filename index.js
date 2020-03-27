// importar express
const express = require('express');
// importar path
const path = require('path');

// instanciar servidor de express
const app = express();

// configurar carpeta public como estática o pública
app.use(express.static('public'));

// configurar ruta inicial
app.get('/', function (request, response) {
  console.log('hola en la consola');
  // response.send('hola en chrome');
  // responder con un archivo
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/contacto', function (request, response) {
  console.log('hola en contacto');
  // responder con un texto
  response.send('página de contacto');
});

app.get('/sobre-nosotros', function (req, res) {
  res.send('Texto bien chévere sobre esta empresa.');
});

// iniciar servidor en puerto 3000
app.listen(3000, function () {
  console.log('servidor iniciado en puerto 3000');
});

// npm = node package manager
// npx = node package executer