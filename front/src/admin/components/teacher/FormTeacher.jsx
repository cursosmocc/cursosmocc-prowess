import React from "react";

const FormTeacher = () => {

  return (
    <form className="row g-1 w-50 m-auto gap-xl-2">

          <div className="col-md-12">
            <label htmlFor="idName" className="form-label">
              Nombre del Docente
            </label>

            <input
              type="text"
              className="form-control"
              id="idName"
              name="name"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="idLastname" className="form-label">
              Apellido del Docente
            </label>
            <input
              type="text"
              className="form-control"
              id="idLastname"
              name="lastname"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="idDepartament" className="form-label"> Departamento
            </label>
            <input
              type="text"
              className="form-control"
              id="idDepartament"
              name="departament"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="idArea" className="form-label">
              Area de Conocimiento
            </label>
            <input
              type="text"
              className="form-control"
              id="idArea"
              name="area"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="idCedula" className="form-label">
              Cedula del Docente
            </label>
            <input
              type="text"
              className="form-control"
              id="idCedula"
              name="cedula"
            />
          </div>
          
          <div className="mt-2 col-12 d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-success"
            >
              Registrar Docente 
            </button>
          </div>
    </form>
  );
};

export default FormTeacher;
