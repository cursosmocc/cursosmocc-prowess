import React from "react";
import "./style.css";
const TableCourse = () => {
  return (
    <>
      <table className="table w-90 m-auto">
        <thead className="table-prwowess">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Nombre del Estududiante</th>
            <th>Nombre del Docente</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
            <tr>
            <td>1</td>
                <td>Curso de React</td>
                <td>Curso desarrollado por estudiantes de software</td>
                <td>Lunes 12:20 a 4:20</td>
                <td>Alexander</td>
                <td>Jonathan</td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableCourse;
