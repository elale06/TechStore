const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Importar middlewares y rutas
const logger = require('./middlewares/logger');
const productosRoutes = require('./routes/productos.routes');

// Middlewares
app.use(cors());
app.use(express.json()); 
app.use(logger); 

// Rutas
app.use('/productos', productosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});