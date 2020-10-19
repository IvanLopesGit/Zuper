import React from "react";
import "./Portfolio.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Releases() {
  return (
    <div className="portfolio">
      <div className="portfolio-title">Portfólio</div>
      <div className="carousel-container">
        <Carousel
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          swipeable={true}
          dynamicHeight={true}
          className="carousel"
          interval="3000"
          transitionTime="700"
        >
          <div>
            <img src={require("../Images/MRBand/mrband1.png")} alt="" />
            <p className="legend">Home</p>
          </div>
          <div>
            <img src={require("../Images/MRBand/mrband2.png")} alt="" />
            <p className="legend">About</p>
          </div>
          <div>
            <img src={require("../Images/MRBand/mrband3.png")} alt="" />
            <p className="legend">Menu Dinâmico</p>
          </div>
          <div>
            <img src={require("../Images/MRBand/mrband4.png")} alt="" />
            <p className="legend">Gallery</p>
          </div>
          <div>
            <img src={require("../Images/MRBand/mrband5.png")} alt="" />
            <p className="legend">Media</p>
          </div>
          <div>
            <img src={require("../Images/MRBand/mrband6.png")} alt="" />
            <p className="legend">Clipping</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Releases;
