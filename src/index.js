// Importamos las herramientas necesarias de React
// React es como el cerebro que nos permite crear nuestra aplicación
import React from "react";
// ReactDOM es la herramienta que nos permite mostrar nuestra aplicación en el navegador
import ReactDOM from "react-dom/client";

import "./index.css";


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
  return (
    <main className="menu">
      <h2>Nuestro Menú</h2>
      <ul className="pizzas">
        <Pizza 
        name="Pizza Spinaci"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/spinaci.jpg"
        />
        <Pizza
        name="Pizza Funghi"
        ingredients="Tomato and mozarella and mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
        />
      </ul>
    </main>

  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}/>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 2}</span>
      </div>
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
