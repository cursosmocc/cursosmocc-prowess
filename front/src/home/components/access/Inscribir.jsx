import React from "react";
import emprendimiento from "../../assets/img/emprendimiento.jpg";

import { NavLink } from "react-router-dom";
import "./style.css";

export const Inscribirse = () => {
  return (
    <div className="container servicios bg-muted">
      <div className="row">
        <div className="col-lg-4 primero">
          <h2>CURSO ACADEMICO A</h2>
          <NavLink to="/">
            <img className="img5" src={emprendimiento} alt="" />
          </NavLink>
          <h4>
            <center>Emprendimiento</center>
          </h4>
          <p>
            <NavLink className="btn btn-secondary bg-success" to="/">
              Inscribirse
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
