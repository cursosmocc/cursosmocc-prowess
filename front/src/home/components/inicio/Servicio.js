import { NavLink } from "react-router-dom";

import "./style.css";

export const Servicio = ({ img, text }) => {
  return (
    <>
      <div className="col-12 col-lg-4  d-flex justify-content-lg-center align-items-center servicio">
        <img className="icon " src={img} alt="" />
        <NavLink to="/cursos/general">{text}</NavLink>
      </div>
    </>
  );
};
