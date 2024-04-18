const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { Pool } = require('pg');

// Configura la conexión a la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'ciber.cwyblvgboiei.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'postgres', 
  port: 5432, // Puerto por defecto de PostgreSQL
});

// Manejar errores de conexión a la base de datos
pool.on('error', (err, client) => {
  console.error('Error in PostgreSQL client', err);
});

// Verificar la conexión
pool.connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

console.log("la ruta es: ", __dirname);

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log(formData);

  // Realiza una consulta de ejemplo a la base de datos
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Error en el servidor');
    } else {
      console.log('Resultado de la consulta:', result.rows);
      res.send('¡Datos del formulario recibidos con éxito!');
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
