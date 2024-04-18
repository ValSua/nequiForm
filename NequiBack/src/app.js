const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public'))); // Servir archivos estáticos desde la carpeta 'public'

console.log("la ruta es: ", __dirname);

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.send('¡Datos del formulario recibidos con éxito!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});