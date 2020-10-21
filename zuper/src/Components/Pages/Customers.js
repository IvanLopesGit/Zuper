import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Customers.css";

export default function Customers() {
  return (
    <>
      <div className="customers">
        <div className="customers-modal">
          <img
            src={require("../../Images/MRBand/logo.png")}
            alt="Mario Rossi Band"
            className="customers-mrband"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
