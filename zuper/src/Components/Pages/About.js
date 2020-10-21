import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-text">
          Meu nome é Ivan, sou formado em Sistemas de Informção <br />
          pela instituição Fundação Herminio Ometto, localizada em <br />
          Araras - SP, curso finalizado em 2012.
          <br /> Tenho conhecimento em Java, C#, HTML,
          <br /> CSS, JavaScript, Banco de Dados,
          <br /> React, Node.js, React-Native.
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}
