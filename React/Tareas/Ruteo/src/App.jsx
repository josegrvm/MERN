
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Navegacion from './Navegacion';

const App = () => (
  <Router>
    <Navegacion />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/acerca" element={<AcercaDe />} />
    </Routes>
  </Router>
);

export default App;