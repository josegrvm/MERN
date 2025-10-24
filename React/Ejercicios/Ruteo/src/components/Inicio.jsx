// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Inicio = () => {
//     const [respuesta, setRespuesta] = useState('');
//     const navigate = useNavigate();

//     const manejarEnvio = (evento) => {
//         evento.preventDefault();
//         navigate('/respuestas', { state: { respuesta } });
//     };

//     return (
//         <div>
//         <h1>Pregunta rápida</h1>
//         <form onSubmit={manejarEnvio}>
//             <label>
//             ¿Cuál es tu color favorito?
//             <input
//                 type="text"
//                 value={respuesta}
//                 onChange={(e) => setRespuesta(e.target.value)}
//                 required
//             />
//             </label>
//             <button type="submit">Enviar</button>
//         </form>
//         </div>
//     );
// };

// export default Inicio;



// // Inicio.jsx. (RECETAS)
// import React from 'react';
// import { Link } from 'react-router-dom';

// const recetas = [
//   { nombre: 'Spaghetti Carbonara', ruta: 'spaghetti-carbonara' },
//   { nombre: 'Pollo al Curry', ruta: 'pollo-curry' },
//   { nombre: 'Ensalada Vegana', ruta: 'ensalada-vegana' },
// ];

// const Inicio = () => (
//   <div className="inicio-contenedor">
//     <h1>Recetas de cocina</h1>
//     <ul>
//       {recetas.map((receta) => (
//         <li key={receta.ruta}>
//           <Link to={`/receta/${receta.ruta}`}>{receta.nombre}</Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default Inicio;