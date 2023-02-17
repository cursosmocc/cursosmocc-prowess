import React from "react";
import Curso from "./Curso";
//import { cursos } from "./datosCursos";

const ListCurso = ({ tipos, courses }) => {
  return (
    <div className="row g-5 mx-auto">
      {courses.map((curso) => {
        return <Curso key={curso.id} curso={curso} />;
      })}
    </div>
  );
};
export default ListCurso;
