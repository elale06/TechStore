let { productos } = require('../data/productos');

// GET /productos
const obtenerProductos = (req, res) => {
    res.status(200).json(productos);
};

// GET /productos/:id
const obtenerProductoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    
    if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(producto);
};

// POST /productos
const crearProducto = (req, res) => {
    const { nombre, categoria, precio, stock } = req.body;

    // Validaciones
    if (!nombre || !categoria || nombre.trim() === '' || categoria.trim() === '') {
        return res.status(400).json({ error: "Nombre y categoría no pueden estar vacíos" });
    }
    if (precio <= 0) {
        return res.status(400).json({ error: "El precio debe ser mayor a cero" });
    }
    if (stock < 0) {
        return res.status(400).json({ error: "El stock no puede ser negativo" });
    }

    const nuevoId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const nuevoProducto = { 
        id: nuevoId, 
        nombre, 
        categoria, 
        precio: Number(precio), 
        stock: Number(stock) 
    };
    
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
};

// PUT /productos/:id
const actualizarProducto = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, categoria, precio, stock } = req.body;
    
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Validaciones
    if (!nombre || !categoria || nombre.trim() === '' || categoria.trim() === '') {
        return res.status(400).json({ error: "Nombre y categoría no pueden estar vacíos" });
    }
    if (precio <= 0) {
        return res.status(400).json({ error: "El precio debe ser mayor a cero" });
    }
    if (stock < 0) {
        return res.status(400).json({ error: "El stock no puede ser negativo" });
    }

    productos[index] = { 
        id, 
        nombre, 
        categoria, 
        precio: Number(precio), 
        stock: Number(stock) 
    };
    res.status(200).json(productos[index]);
};

// DELETE /productos/:id
const eliminarProducto = (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    productos.splice(index, 1);
    res.status(200).json({ mensaje: "Producto eliminado correctamente" });
};

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};