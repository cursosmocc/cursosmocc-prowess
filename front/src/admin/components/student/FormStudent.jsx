import React from "react";

const FormStudent = () => {
  const [nextPage, setNextPage] = React.useState(false);
  const handleNextSubmit = (e) => {
    e.preventDefault();
    setNextPage(true);
  };
  const handlePrevSubmit = (e) => {
    e.preventDefault();
    setNextPage(false);
    };
  return (
    <>
      <form className="row g-1 w-50 m-auto gap-xl-2">
        {!nextPage ? (
          <>
            <div className="col-md-12">
              <label htmlFor="idName" className="form-label">
                Nombre
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
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="idLastname"
                name="lastname"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="idDepartament" className="form-label">
                Ciudad
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
                Cedula
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
                Correo
              </label>
              <input
                type="text"
                className="form-control"
                id="idCedula"
                name="cedula"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="idCedula" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="idCedula"
                name="cedula"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputState" className="form-label">
                Curso
              </label>
              <select
                defaultValue={"hola"}
                id="inputState"
                className="form-select"
              >
                <option>Seleccione un Curso</option>
                <option>...</option>
              </select>
            </div>

            <div className="mt-2 col-12 d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleNextSubmit}
              >
                Siguiente
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-12">
              <label>Seleccione la ONG a la que pertenece</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Fudela"
                  id="idZoom"
                  name="medios"
                />
                <label className="form-check-label" htmlFor="idZoom">
                  Fudela
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Hias"
                  id="idMeet"
                  name="medios"
                />
                <label className="form-check-label" htmlFor="idMeet">
                  Hias
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Ninguna"
                  id="idTeams"
                  name="medios"
                />
                <label className="form-check-label" htmlFor="idTeam">
                  Ninguna
                </label>
              </div>
            </div>
            <div className="mt-2 col-12 d-flex justify-content-end gap-3">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={handlePrevSubmit}
                >
                  Anterior
                </button>
                <button type="submit" className="btn btn-success">
                  Guardar
                </button>
              </div>
          </>
        )}
      </form>
    </>
  );
};

export default FormStudent;
