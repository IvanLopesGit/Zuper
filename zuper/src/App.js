import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Sobre from "./Components/Pages/About";
import Clientes from "./Components/Pages/Customers";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sobre" exact component={Sobre} />
          <Route path="/Clientes" exact component={Clientes} />
          <Route path="/Contato" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
