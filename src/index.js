// Importamos las herramientas necesarias de React
// React es como el cerebro que nos permite crear nuestra aplicación
import React from "react";
// ReactDOM es la herramienta que nos permite mostrar nuestra aplicación en el navegador
import ReactDOM from "react-dom/client";

import "./index.css";

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


function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style} className="header">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzasCount = pizzas.length;
  return (
    <main className="menu">
      <h2>Nuestro Menú</h2>
      {pizzasCount > 0 ? 
      <>
      <p>These are the pizzas we offer. Please choose your favorite and order online</p>
      <ul className="pizzas">
        {pizzas.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>
      </>
       : <p>We're still working on our menu. Please come back later :)</p>}
    </main>

  );
}

function Pizza({pizzaObj}) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>

  );
}


function Footer() {
  //return React.createElement("footer", null, "We are currently open");
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return(
  <footer className="footer">
    {isOpen ? 
    <Order closeHour={closeHour}/>
    : <p>we're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
  </footer>
  );
}

function Order({closeHour}) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
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
