const express = require('express');
const app = express();
const port = 9000;

// Página principal con botones
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Mi Proyecto Docker</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 50px;
        }
        button {
          padding: 15px 30px;
          margin: 10px;
          font-size: 16px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <h1>Bienvenido a mi proyecto Docker</h1>
      <button onclick="location.href='/clientes'">Clientes</button>
      <button onclick="location.href='/productos'">Productos</button>
    </body>
    </html>
  `);
});

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
