// importar express
const express = require('express');
// importar path
const path = require('path');
// importart express-handlebars
const exphbs = require('express-handlebars');

// instanciar servidor de express
const app = express();

// registrar motor de render para handlebars
app.engine('handlebars', exphbs());
// use el motor de render handlebars
app.set('view engine', 'handlebars');

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

// ruta para la lista de productos con handlebars
app.get('/tienda', function (req, res) {
  // objeto contexto
  var context = {
    title: 'El título cambiado',
  }
  // renderizar vista
  res.render('store', context);
});

// ruta para la lista de productos con handlebars
app.get('/producto/:name', function (req, res) {
  var context = {};

  if(req.params.name == 'pantalon'){
    context = {
      title: 'Pantalón',
      img: '/images/pantalon.jpg',
      description: 'un pantalón bien chimbita',
    }
  }
  
  if(req.params.name == 'camiseta'){
    context = {
      title: 'Camiseta',
      img: '/images/camiseta.jpg',
      description: 'una camiseta',
    }
  }

  console.log(req.params.name);

  // devuélvame la información del producto # 1
  // pasar info del producto al contexto

  // renderizar vista
  res.render('product', context);
});

// iniciar servidor en puerto 3000
app.listen(3000, function () {
  console.log('servidor iniciado en puerto 3000');
});

// npm = node package manager
// npx = node package executer