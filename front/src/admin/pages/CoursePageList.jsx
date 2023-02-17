import React from "react";
import { TableList } from "../components/TableList";
function createData(id, name, descripcion, nombreEstudiante, nombreProfesor, nombreCategoria, actions) {
  return [ id, name, descripcion, nombreEstudiante, nombreProfesor, nombreCategoria, actions ];
}
const columns = [
  { id: "id", label: "ID", minWidth: 20, align: "center", maxWidth: 20 },
  { id: "name", label: "Nombre", minWidth: 50, align: "center", maxWidth: 250 },
  {id:'descripcion', label:'Descripcion', minWidth:50, align:'center', maxWidth:250},
  {id:'nombreEstudiante', label:'Estudiante', minWidth:50, align:'center', maxWidth:250},
  {id:'nombreProfesor', label:'Profesor', minWidth:50, align:'center', maxWidth:250},
  {id:'nombreCategoria', label:'Categoria', minWidth:50, align:'center', maxWidth:250},
  {
    id: "actions",
    label: "Acciones",
    minWidth: 25,
    align: "center",
    maxWidth: 50,
  },
  
];

const rows = [
  createData("1", "Programacion Web", "Curso de programacion web", "Alexander Arboileda", "Diogo Velasco", "Computacion", "Editar/Eliminar"),
];
const CoursePageList = () => {
  return (
    <div className={"p-4 my-container"}>
      <h1 className="text-center mb-5">LISTA DE CURSOS</h1>
      <TableList columns={columns} rows={rows}/>
    </div>
  );
};

export default CoursePageList;
