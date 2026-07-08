import { useState, useEffect } from 'react';

const FormularioProducto = ({ guardarProducto, productoEditando, setProductoEditando }) => {
  const [formData, setFormData] = useState({ nombre: '', categoria: '', precio: '', stock: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (productoEditando) {
      setFormData(productoEditando);
    } else {
      setFormData({ nombre: '', categoria: '', precio: '', stock: '' });
    }
  }, [productoEditando]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones Frontend
    if (!formData.nombre.trim()) return setError('El nombre no puede estar vacío.');
    if (!formData.categoria.trim()) return setError('La categoría no puede estar vacía.');
    if (Number(formData.precio) <= 0) return setError('El precio debe ser mayor a cero.');
    if (Number(formData.stock) < 0) return setError('El stock no puede ser negativo.');
    
    setError('');
    guardarProducto(formData);
    setFormData({ nombre: '', categoria: '', precio: '', stock: '' });
  };

  const cancelarEdicion = () => {
    setProductoEditando(null);
    setFormData({ nombre: '', categoria: '', precio: '', stock: '' });
    setError('');
  };

  return (
    <div className="formulario-container">
      <h2>{productoEditando ? 'Editar Producto' : 'Nuevo Producto'}</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit} className="formulario">
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
        <input type="text" name="categoria" placeholder="Categoría" value={formData.categoria} onChange={handleChange} />
        <input type="number" name="precio" placeholder="Precio" value={formData.precio} onChange={handleChange} />
        <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} />
        
        <div className="botones-form">
          <button type="submit" className="btn-guardar">{productoEditando ? 'Actualizar' : 'Guardar'}</button>
          {productoEditando && <button type="button" className="btn-cancelar" onClick={cancelarEdicion}>Cancelar</button>}
        </div>
      </form>
    </div>
  );
};

export default FormularioProducto;