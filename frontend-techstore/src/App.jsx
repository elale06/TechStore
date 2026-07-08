import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar.jsx";
import FormularioProducto from "./components/FormularioProducto.jsx";
import TablaProductos from "./components/TablaProductos.jsx";
import Footer from "./components/Footer.jsx";

const API_URL = 'http://localhost:3000/productos';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get(API_URL);
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const guardarProducto = async (producto) => {
    try {
      if (productoEditando) {
        await axios.put(`${API_URL}/${productoEditando.id}`, producto);
        setProductoEditando(null);
      } else {
        await axios.post(API_URL, producto);
      }
      obtenerProductos(); // Actualiza la tabla automáticamente
    } catch (error) {
      alert(error.response?.data?.error || "Error al guardar el producto");
    }
  };

  const eliminarProducto = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        obtenerProductos();
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <FormularioProducto 
          guardarProducto={guardarProducto} 
          productoEditando={productoEditando} 
          setProductoEditando={setProductoEditando} 
        />
        <TablaProductos 
          productos={productos} 
          setProductoEditando={setProductoEditando} 
          eliminarProducto={eliminarProducto} 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;