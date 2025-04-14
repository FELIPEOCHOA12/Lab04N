const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 9000;

// Conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'lab04'
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');

  // Crear tablas si no existen
  db.query(`CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
  )`, console.log);

  db.query(`CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
  )`, console.log);

  // Insertar datos aleatorios (evita duplicar con EXISTS o al inicio)
  db.query(`INSERT INTO clientes (nombre) VALUES ('Cliente 1'), ('Cliente 2')`);
  db.query(`INSERT INTO productos (nombre) VALUES ('Producto A'), ('Producto B')`);
});

// Ruta principal con botones
app.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido a mi Proyecto Docker</h1>
    <button onclick="location.href='/clientes'">Clientes</button>
    <button onclick="location.href='/productos'">Productos</button>
  `);
});

// Mostrar datos de clientes
app.get('/clientes', (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) return res.status(500).send('Error al obtener clientes');
    res.json(results);
  });
});

// Mostrar datos de productos
app.get('/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) return res.status(500).send('Error al obtener productos');
    res.json(results);
  });
});

// Servidor
app.listen(port, () => {
  console.log(`Aplicación corriendo en http://localhost:${port}`);
});
