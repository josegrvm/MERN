import React from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Content from "./components/content";


function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Content />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;