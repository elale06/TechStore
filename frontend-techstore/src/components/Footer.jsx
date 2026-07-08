const Footer = () => {
  const fechaActual = new Date().toLocaleDateString();

  return (
    <footer className="footer">
      <p>Desarrollado por: Alexander Pinto Billiet - Fecha: {fechaActual}</p>
    </footer>
  );
};

export default Footer;