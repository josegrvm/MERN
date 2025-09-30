import React from "react";

function TarjetaProducto({ nombreProducto, precio, descripcion, enStock }) {
    return (
    <div style={styles.card}>
        <h2>{nombreProducto}</h2>
        <p><strong>Precio:</strong> ${precio}</p>
        <p>{descripcion}</p>
        <p style={{ color: enStock ? "green" : "red" }}>
        {enStock ? "En Stock" : "Agotado"}
        </p>
    </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        fontFamily: "Arial"
    }
};

export default TarjetaProducto;