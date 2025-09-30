import React, { useState } from "react";
import "./App.css";

function Formulario() {
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        contrasena: "",
        confirmar: "",
    });

    const [errores, setErrores] = useState({});
    const [heroes, setHeroes] = useState([]);
    const [titulo, setTitulo] = useState("Bienvenido a la Liga de Superhéroes");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validar = () => {
        let nuevosErrores = {};

        // Nombre y Apellido
        if (form.nombre.trim().length < 4) {
        nuevosErrores.nombre = "El nombre debe tener al menos 4 caracteres.";
        }
        if (form.apellido.trim().length < 4) {
        nuevosErrores.apellido = "El apellido debe tener al menos 4 caracteres.";
        }

        // Correo
        if (form.correo.length < 10 || !form.correo.includes("@")) {
        nuevosErrores.correo =
            "El correo debe tener al menos 10 caracteres e incluir @.";
        }

        // Contraseña
        if (form.contrasena.length < 12) {
        nuevosErrores.contrasena =
            "La contraseña debe tener al menos 12 caracteres.";
        }
        if (form.contrasena !== form.confirmar) {
        nuevosErrores.confirmar = "Las contraseñas no coinciden.";
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
        const nuevoHeroe = {
            nombre: form.nombre,
            apellido: form.apellido,
            correo: form.correo,
        };
        setHeroes([...heroes, nuevoHeroe]);
        setTitulo(`¡${form.nombre} ha sido registrado en la Liga!`);

        // limpiar formulario
        setForm({
            nombre: "",
            apellido: "",
            correo: "",
            contrasena: "",
            confirmar: "",
        });
        }
    };

    return (
        <div className="contenedor">
        <h1>{titulo}</h1>

        <div className="lista">
            <h2>Registro de superhéroes:</h2>
            <ul>
            {heroes.map((h, index) => (
                <li key={index}>
                {h.nombre} {h.apellido} - {h.correo}
                </li>
            ))}
            </ul>
        </div>

        <form onSubmit={handleSubmit} className="formulario">
            <label>Nombre:</label>
            <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}

            <label>Apellido:</label>
            <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            />
            {errores.apellido && <p className="error">{errores.apellido}</p>}

            <label>Correo Electrónico:</label>
            <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            />
            {errores.correo && <p className="error">{errores.correo}</p>}

            <label>Contraseña:</label>
            <input
            type="password"
            name="contrasena"
            value={form.contrasena}
            onChange={handleChange}
            />
            {errores.contrasena && <p className="error">{errores.contrasena}</p>}

            <label>Confirmar Contraseña:</label>
            <input
            type="password"
            name="confirmar"
            value={form.confirmar}
            onChange={handleChange}
            />
            {errores.confirmar && <p className="error">{errores.confirmar}</p>}

            <button type="submit">Crear Superhéroe</button>
        </form>

        {/*Imagen*/}
        <img src="/Img/hero.png" alt="superhéroe" className="imagen-hero" />
        </div>
    );
}

export default Formulario;