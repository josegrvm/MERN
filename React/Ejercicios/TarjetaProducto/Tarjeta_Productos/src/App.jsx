import React from "react";
import TarjetaProducto from "./TarjetaProducto";

function App() {
  return (
    <div style={styles.container}>
      <TarjetaProducto
        nombreProducto="Laptop"
        precio={1500}
        descripcion="Una potente laptop lista para trabajar y jugar."
        enStock={true}
      />

      <TarjetaProducto
        nombreProducto="Smartphone"
        precio={800}
        descripcion="Un smartphone de última generación."
        enStock={false}
      />

      <TarjetaProducto
        nombreProducto="Auriculares"
        precio={120}
        descripcion="Auriculares inalámbricos con cancelación de ruido."
        enStock={true}
      />

      <TarjetaProducto
        nombreProducto="Monitor"
        precio={300}
        descripcion="Monitor 4K para una experiencia visual increíble."
        enStock={true}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    flexWrap: "wrap"
  }
};

export default App;