import React from "react";
import { NavLink } from "react-router-dom";
import "./css.css";
export const Navbar = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="bgnavbar nav__banner ">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink to="/" className="navbar-brand ">
            <img
              className="logo"
              src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670968244/modulomocc/assets/logo.png"
              alt=""
            />
          </NavLink>
          <NavLink
            to="/"
            className="navbar-brand d-flex justify-content-center align-items-center"
          >
            <img
              width="112"
              height="70"
              src="https://res.cloudinary.com/dena7lqj3/image/upload/v1674077440/modulomocc/assets/Bandera_Ecuador_oy5pa9.svg"
              alt=""
            />
            <img
              width="108"
              height="82"
              src="https://res.cloudinary.com/dena7lqj3/image/upload/v1674077426/modulomocc/assets/Logo_ESPE_f1qbd6.png"
              alt=""
            />
          </NavLink>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bgnavbar sticky-top ">
        <div className="container d-flex justify-content-center">
          <button
            className="navbar-toggler d-xl-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav my-2 gap-2 gap-xl-4 ">
              <li className="nav-item">
                <NavLink
                  style={{ color: "#4D6066" }}
                  to="/"
                  className="nav-link"
                  aria-current="page"
                >
                  Inicio
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink
                  style={{ color: " #4D6066" }}
                  to="/nosotros"
                  className="nav-link"
                >
                  Institución
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink
                  style={{ color: " #4D6066" }}
                  to="/cursos/general"
                  className="nav-link"
                >
                  Cursos Generales
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink
                  style={{ color: " #4D6066" }}
                  to="/register"
                  className="nav-link"
                  target={"_blank"}
                  onClick={clearLocalStorage}
                >
                  Inscripciones
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink
                  style={{ color: " #4D6066" }}
                  to="/cursos/personalizados"
                  className="nav-link"
                >
                  Cursos Personalizados
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  href="https://cursosmocc.prowessec.com"
                  target="_blank"
                  className="nav-link"
                  rel="noreferrer"
                  style={{ color: " #4D6066" }}
                >
                  Campus Virtual
                  <div className="line"></div>
                </a>
              </li>

              <li className="nav-item dropdown ">
                <NavLink
                  style={{ color: " #4D6066" }}
                  className="nav-link dropdown-toggle help_icon"
                  to="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Ayuda <span className="arrow-down"></span>
                  <div className="line"></div>
                </NavLink>
                <div
                  className="dropdown-menu ml-2"
                  aria-labelledby="dropdownId"
                >
                  <NavLink
                    style={{ color: " #4D6066" }}
                    to="/ayudados"
                    className="dropdown-item"
                  >
                    Pagos en linea
                  </NavLink>
                  <NavLink
                    style={{ color: " #4D6066" }}
                    to="/contactos"
                    className="dropdown-item"
                  >
                    Contacto
                  </NavLink>
                  <NavLink
                    style={{ color: " #4D6066" }}
                    to="/preguntas"
                    className="dropdown-item"
                  >
                    Preguntas Frecuentes
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
