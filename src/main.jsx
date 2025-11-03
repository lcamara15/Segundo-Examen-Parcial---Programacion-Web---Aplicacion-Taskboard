// Punto de entrada de la app
import "./styles.css";                  // Estilos
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";            // Componente raíz

// Monta <App /> 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>                     {/* Ayuda a detectar problemas en dev */}
    <App />
  </React.StrictMode>
);

