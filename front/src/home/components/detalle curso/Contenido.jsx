import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Contenido = ({ curso }) => {
  const [urlImg, setUrlImg] = useState("");

  const _getImg = () => {
    if (!curso.overviewfiles) return;

    if (curso?.overviewfiles.length > 0)
      setUrlImg(`${curso.overviewfiles[0].fileurl}`.replace("/webservice", ""));
  };

  const setCourse = () => {
    localStorage.setItem("courses", JSON.stringify(curso));
  };

  useEffect(() => {
    _getImg();
  });

  return (
    <div className="row" id="principal">
      <div className="col-12 col-lg-6 p-3">
        <h1 className="title-nombre"> CURSO DE {curso.fullname}</h1>
        <h4 className="text-modalidad">
          Detalle del curso {curso?.modalidad}
        </h4>
        <p className="detalle_cursos" dangerouslySetInnerHTML={{ __html: curso?.summary }}></p>
        <div className="">
          <NavLink
            to={`/register`}
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            onClick={setCourse}
          >
            <button className="btn btn-success button mt-2">
              INSCRÍBETE YA
            </button>
          </NavLink>
        </div>
      </div>
      <div className="col-12 col-lg-6 detalle_cursos_img-container">
        <img src={urlImg} className="detalle_cursos_img" alt="..." />
      </div>
    </div>
  );
};

export default Contenido;
