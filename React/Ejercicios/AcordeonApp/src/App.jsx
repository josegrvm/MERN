import Accordion from "./Accordion";
import "./App.css";

function App() {
  const sections = [
    { title: "Sección 1", content: "Contenido secreto de la sección 1" },
    { title: "Sección 2", content: "Contenido oculto de la sección 2" },
    { title: "Sección 3", content: "Contenido de la sección 3" },
    { title: "Sección 4", content: "Contenido de la sección 4" },
    { title: "Sección 5", content: "Contenido de la sección 5" },
    { title: "Sección 6", content: "Contenido de la sección 6" },
    { title: "Sección 7", content: "Contenido de la sección 7" },
  ];

  return (
    <div className="app-container">
      <h1 className="title">Acordeón de Secciones</h1>
      <Accordion sections={sections} />
    </div>
  );
}

export default App;