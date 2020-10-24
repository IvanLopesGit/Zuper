import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Company.css";

export default function Company() {
  return (
    <>
      <div className="company">
        <div className="company-text">
          A Zuper foi criada em 2020, com foco em desenvolvimento de WebSites.
          <br />
          Trabalhamos com as tecnologias mais utilizadas no mercado:
          <br />
          React, Node.js, HTML5, CSS3, JavaScript. <br />
          Se você deseja criar um site empresarial, comercial,
          <br /> notícias ou outros temas, <br />
          acesse a área de contatos e nos envie um e-mail. <br />
          Ficaremos felizes em criar seu projeto!
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}
