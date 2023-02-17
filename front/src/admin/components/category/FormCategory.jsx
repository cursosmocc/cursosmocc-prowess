import React from "react";

const FormCategory = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <>
      <form className="row g-1 w-50 m-auto gap-xl-2"  onSsubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="idName" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="idName" name="name" />
        </div>

        <div className="col-md-12">
          <label htmlFor="idLastname" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            id="idDescripcion"
            name="lastname"
          />
        </div>
        <div className="mt-5 col-12 d-flex justify-content-end">
        <button 
        type="submit" 
        className="btn btn-success"
        >
          Crear Categoria
        </button>
      </div>
      </form>
    </>
  );
};

export default FormCategory;
