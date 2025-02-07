// Importamos las herramientas necesarias de React
// React es como el cerebro que nos permite crear nuestra aplicación
import React from "react";
// ReactDOM es la herramienta que nos permite mostrar nuestra aplicación en el navegador
import ReactDOM from "react-dom/client";

import { pizzaData } from "./data.js";

// Creamos nuestra primera función llamada App
// Esta función es como un contenedor principal que mostrará todo lo que queremos ver en pantalla

function App() {
  // El return indica qué queremos mostrar en la pantalla
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>
        This is a pizza with spinach, mozzarella, and tomatoes. It is a
        delicious pizza.
      </p>
      <span>20€</span>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Nuestro Menú</h2>
      <ul className="pizzas">
        <Pizza />
        <Pizza />
      </ul>
    </div>
  );
}

function Footer() {
  //return React.createElement("footer", null, "We are currently open");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently open
    </footer>
  );
}

// Aquí le decimos a React dónde queremos mostrar nuestra aplicación
// Buscamos un elemento en nuestro archivo HTML que tenga el id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));

// Finalmente, le decimos a React que muestre nuestra aplicación

root.render(
  // StrictMode es como un ayudante que nos avisa si cometemos errores
  <React.StrictMode>
    {/* Aquí insertamos nuestra App que creamos arriba */}
    <App />
  </React.StrictMode>
);
