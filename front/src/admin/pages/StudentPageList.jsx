import React from "react";
import TableStudents from "../components/student/TableStudents";

const StudentPageList = () => {
  return (
    <div
      className={'p-4 my-container'}
    >
      <h1 className="text-center mb-5">LISTA DE ESTUDIANTES</h1>
      <TableStudents />
    </div>
  );
};

export default StudentPageList;
