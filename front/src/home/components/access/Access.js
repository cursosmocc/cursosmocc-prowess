import React from "react";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import { NavLink } from "react-router-dom";
import "./style.css";

export const Access = () => {
  return (
    <div className="container servicios bg-muted">
      <div className="row">
        <div className="col-lg-3 primero">
          <NavLink to="/" className="rounded-circle">
            <img className="img1" src={img1} alt="" />
          </NavLink>
          <h4>
            <center>
              Auxiliar<br></br>Administrativo <br></br>en Salud
            </center>
          </h4>
          <p>
            <a
              className="btn btn-secondary bg-primary"
              href="#"
              rel="noopener noreferrer"
              role="button"
            >
              Acceder
            </a>
          </p>
        </div>

        <div className="col-lg-3 primero">
          <NavLink to="/" className="rounded-circle">
            <img className="img2" src={img2} alt="" />
          </NavLink>
          <h4>
            <center>
              Auxiliar<br></br>Administravivo
            </center>
          </h4>
          <p>
            <a
              className="btn btn-secondary bg-primary"
              href="#"
              rel="noopener noreferrer"
              roler="button"
            >
              Acceder
            </a>
          </p>
        </div>

        <div className="col-lg-3 primero">
          <NavLink to="/" className="rounded-circle">
            <img className="img3" src={img3} alt="" />
          </NavLink>
          <h4>
            <center>
              Auxiliar Contable<br></br>y Financiero
            </center>
          </h4>
          <p>
            <a
              className="btn btn-secondary bg-primary"
              href="#"
              rel="noopener noreferrer"
              roler="button"
            >
              Acceder
            </a>
          </p>
        </div>

        <div className="col-lg-3 primero">
          <NavLink to="/" className="rounded-circle">
            <img className="img4" src={img4} alt="" />
          </NavLink>
          <h4>
            <center>Conoce Nuestras Ofesrtas</center>
          </h4>
          <p>
            <a
              className="btn btn-secondary bg-primary"
              href="#"
              rel="noopener noreferrer"
              roler="button"
            >
              Acceder
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
