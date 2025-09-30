import React from "react";
import TarjetaProducto from "./TarjetaProductos";
import "./App.css"; 

function App() {
  return (
    <div className="container">
      <h1 className="titulo">TechStore - Tu Destino para la Mejor Tecnología</h1>

      <div className="cardsContainer">
        <TarjetaProducto
          nombreProducto="Laptop"
          precio={1500}
          descripcion="Una potente laptop lista para trabajar y jugar."
          stockInicial={10}
        />

        <TarjetaProducto
          nombreProducto="Smartphone"
          precio={800}
          descripcion="Un smartphone de última generación con una de las mejores cámaras."
          stockInicial={0}
        />

        <TarjetaProducto
          nombreProducto="Auriculares"
          precio={200}
          descripcion="Auriculares con cancelación de ruido. No escucharás nada a tu alrededor."
          stockInicial={5}
        />

        <TarjetaProducto
          nombreProducto="Monitor"
          precio={300}
          descripcion="Monitor 4K para una experiencia visual increíble."
          stockInicial={7}
        />
      </div>
    </div>
  );
}

export default App;