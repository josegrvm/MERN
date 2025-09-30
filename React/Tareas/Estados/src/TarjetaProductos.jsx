import React, { useState } from "react";
import "./App.css";

function TarjetaProducto({ nombreProducto, precio, descripcion, stockInicial }) {
    const [stock, setStock] = useState(stockInicial);

    const manejarCompra = () => {
        if (stock > 0) {
            setStock(stock - 1);
            }
        };

    return (
        <div className="card">
            <h2>{nombreProducto}</h2>
            <p><strong>Precio:</strong> ${precio}</p>
            <p>{descripcion}</p>

            {stock > 0 ? (
                <p className="stock">En Stock: {stock}</p>
            ) : (
                <p className="agotado">Agotado</p>
            )}

            <button 
            onClick={manejarCompra} 
            disabled={stock === 0} 
            className="boton"
            >Comprar</button>
        </div>
    );
}

export default TarjetaProducto;