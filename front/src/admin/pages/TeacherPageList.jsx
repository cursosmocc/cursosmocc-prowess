import React from "react";
import TableTeachers from "../components/teacher/TableTeacher";

const TeacherPageList = () => {
  return (
    <div
      className={'p-4 my-container'}
    >
      <h1 className="text-center mb-5">LISTA DE DOCENTES</h1>
      <TableTeachers />
    </div>
  );
};

export default TeacherPageList;
