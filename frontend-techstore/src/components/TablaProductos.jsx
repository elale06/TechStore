import Producto from './Producto';

const TablaProductos = ({ productos, setProductoEditando, eliminarProducto }) => {
  return (
    <div className="tabla-container">
      <h2>Inventario</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <Producto 
              key={producto.id} 
              producto={producto} 
              setProductoEditando={setProductoEditando} 
              eliminarProducto={eliminarProducto} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;