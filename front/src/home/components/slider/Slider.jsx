import React from "react";
import "./style.css";
export const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel">
      <div className="carousel-inner slider-img">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622629/modulomocc/home/sslider1_g0yrxk.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622604/modulomocc/home/slider2_zmjagj.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622613/modulomocc/home/slider3_r8azlx.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};