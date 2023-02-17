import React from "react";
import { TableList } from "../components/TableList";

function createData(id, name, actions) {
  return [ id, name, actions ];
}

const columns = [
  { id: "id", label: "ID", minWidth: 20, align: "center", maxWidth: 20 },
  { id: "name", label: "Nombre", minWidth: 50, align: "center", maxWidth: 250 },
  { id: "actions",label: "Acciones", minWidth: 25, align: "center", maxWidth: 50}];

const rows = [
    createData(1, "Programacion", "Editar/Eliminar"),
    createData(2, "Diseño", "Editar/Eliminar"),
    createData(3, "Marketing", "Editar/Eliminar"),
];

const CategoryPageList = () => {
  return (
    <div className={`p-4 my-container`}>
      <h1 className="text-center">LISTAR CATEGORIAS</h1>
      <TableList rows={rows} columns={columns} />
    </div>
  );
};

export default CategoryPageList;
