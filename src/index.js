// Importamos las herramientas necesarias de React
// React es como el cerebro que nos permite crear nuestra aplicación
import React from 'react';
// ReactDOM es la herramienta que nos permite mostrar nuestra aplicación en el navegador
import ReactDOM from 'react-dom/client';

import { pizzaData } from './data.js';

// Creamos nuestra primera función llamada App
// Esta función es como un contenedor principal que mostrará todo lo que queremos ver en pantalla

function App() {
  // El return indica qué queremos mostrar en la pantalla
  return (
    <div className="container">
      <header className="header">
        <h1>Fast React Pizza Co.</h1>
      </header>
      <main className="menu">
        <h2>Nuestro Menú</h2>
        <ul className="pizzas">
          <Pizza nombre="Pizza Margherita" />
          <Pizza nombre="Pizza Spinaci" />
          <Pizza nombre="Pizza Funghi" />
        </ul>
      </main>
    </div>
  );
}

function Pizza({ nombre }) {
  const pizza = pizzaData.find((p) => p.name === nombre);
  
  if (!pizza) return <p>¡Pizza no encontrada!</p>;

  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price + 2}€</span>
      </div>
    </li>
  );
}

// Aquí le decimos a React dónde queremos mostrar nuestra aplicación
// Buscamos un elemento en nuestro archivo HTML que tenga el id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Finalmente, le decimos a React que muestre nuestra aplicación

root.render(
  // StrictMode es como un ayudante que nos avisa si cometemos errores
  <React.StrictMode>
    {/* Aquí insertamos nuestra App que creamos arriba */}
    <App />
  </React.StrictMode>
);
