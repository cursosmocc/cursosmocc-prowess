import React from "react";
import './style.css'

const FormCourse = () => {
  return (
    <form className="row g-3 w-50 m-auto">
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          Nombre del Curso
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-12">
        <label htmlFor="floatingTextarea">Descripcion</label>
        <textarea
          className="form-control"
          placeholder=""
          id="floatingTextarea"
        ></textarea>
      </div>
      <div className="col-md-12">
        <label htmlFor="inputState" className="form-label">
          Categoria
        </label>
        <select defaultValue={"hola"} id="inputState" className="form-select">
          <option>Seleccione una Categoria</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Docente
            </label>
            <select
              defaultValue={"hola"}
              id="inputState"
              className="form-select"
            >
              <option>Seleccione un Docente</option>
              <option>...</option>
            </select>
            <div className="image-course">
              
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 col-12 d-flex justify-content-end">
        <button type="submit" className="btn btn-success">
          Crear Curso
        </button>
      </div>
    </form>
  );
};

export default FormCourse;
