const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => res.send('Hello World!'));

// Rutas adicionales
app.get('/clientes', (req, res) => {
  res.send('Página de Clientes');
});

app.get('/productos', (req, res) => {
  res.send('Página de Productos');
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en http://localhost:${port}`);
});
