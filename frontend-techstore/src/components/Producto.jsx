const Producto = ({ producto, setProductoEditando, eliminarProducto }) => {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.categoria}</td>
      <td>${producto.precio}</td>
      <td>{producto.stock}</td>
      <td className="acciones">
        <button className="btn-editar" onClick={() => setProductoEditando(producto)}>Editar</button>
        <button className="btn-eliminar" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Producto;