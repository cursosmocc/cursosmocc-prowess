import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

const Curso = ({ curso }) => {
  const [urlImg, setUrlImg] = useState("");

  const _getImg = () => {
    if (curso.overviewfiles.length > 0)
      setUrlImg(`${curso.overviewfiles[0].fileurl}`.replace("/webservice", ""));
  };

  useEffect(() => {
    _getImg();
  });

  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <NavLink to={`/cursos/${curso?.tipo}/${curso.id}`} className="nav-link">
        <div className="card-body">
          <h5 className="card-title mb-0">{curso.fullname}</h5>
        </div>
        <div className="imagen-contenido-curso flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={urlImg} className="img-fluid card-img" alt="..." />
            </div>
            <div
              className="flip-card-back"
              dangerouslySetInnerHTML={{ __html: curso?.summary }}
            ></div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
export default Curso;
