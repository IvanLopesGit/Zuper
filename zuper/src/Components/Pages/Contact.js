import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-text">
          <div className="contact-budget">
            Para solicitar um orçamento, <br />
            envie uma mensagem para o e-mail baixo. <br />
            Especifique detalhadamente o que você precisa.
            <br />
            Exemplo: <br />- Qual o seu projeto;
            <br /> - Quantas imagens irá conter;
            <br /> - Fonte desejada;
            <br />
            - Quantidade de páginas; <br />
            - entre outras informações relevantes.
            <br />
          </div>
          <div className="contact-name">Ivan</div>
          <div className="contact-mail">
            E-mail:{" "}
            <a href="mailto:falecomzuper@gmail.com">contato@zuper.company</a>{" "}
          </div>
          <div className="media">
            <div className="redesocial">
              <div className="rede">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/Zuper-104503528113448/"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-facebook-f" aria-hidden="true"></span>
                </a>
              </div>
              <div className="rede">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/ivan-lopes-135b8b1a/"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-linkedin-in"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
