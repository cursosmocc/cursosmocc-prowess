import React from "react";
import "./estilo.css";
import { formValidations } from "../../helpers/getValidationContactos";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const formData = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};
const Contactos = () => {
  const validation = formValidations;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { onInputChange, formState, formValidation, onResetForm, isFormValid, } =
    useForm(formData, validation);
  const Registrar = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (isFormValid) {
      console.log(formState);
      setFormSubmitted(false);
      onResetForm();
    }
  }
  return (
    <>
      <div className="container-md">
        <h1 className="text-center mt-5 title-curso">Contacto </h1>
        <p className="text-center mb-5 descripcion-curso">Apartado ayuda</p>
      </div>
      <div className="AyudaPage">
        <div className="container">
          <div class="accordion" id="accordionExample" onSubmit={Registrar}>
            <img className="image" src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670884219/modulomocc/ayudas/raya.png" alt="" width="500" height="60" />
            <h1 className="titu">PROWESS EC</h1>

            <div class="accordion-item ">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button btnAy"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  <img
                    className="icon"
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670884219/modulomocc/ayudas/15.png"
                    alt=""
                    width="50"
                    height="40"
                  />
                  <strong className="sub">Celular/Whatsapp</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>(593)992847677</strong>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button btnAy"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo">
                  <img
                    className="icon"
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670884219/modulomocc/ayudas/16.png"
                    alt=""
                    width="50"
                    height="40"
                  />
                  <strong className="sub">Opiniones/Sugerencias</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>Formulario.</strong>
                  <form>
                    <div class="form-group row">
                      <label for="inputEmail4" class="col-sm-2 col-form-label">
                        Asunto
                      </label>
                      <div class="col-sm-10">
                        <select
                          class="form-select"
                          aria-label="Default select example">
                          <option selected>Informacion General</option>
                          <option value="1">Registro de Pago</option>
                          <option value="2">Inscripciones</option>
                        </select>
                      </div>
                      <p></p>
                    </div>
                    <div class="form-group row">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">
                        Nombre
                      </label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="inputEmail3"
                          placeholder="Nombre"
                          onChange={onInputChange}
                          value={formState.inputEmail3}
                        ></input>
                        <p className="mensajeError">
                          {!!formValidation.nombreValid &&
                            formSubmitted &&
                            formValidation.nombreValid}
                        </p>
                      </div>
                      <p></p>
                    </div>

                    <div class="form-group row">
                      <label for="inputEmail5" class="col-sm-2 col-form-label">
                        Email
                      </label>
                      <div class="col-sm-10">
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail5"
                          placeholder="Email"
                          onChange={onInputChange}
                          value={formState.inputEmail5}
                        ></input>
                        <p className="mensajeError">
                          {!!formValidation.nombreValid &&
                            formSubmitted &&
                            formValidation.nombreValid}
                        </p>
                      </div>
                    </div>
                    <p></p>
                    <div class="form-group row">
                      <label
                        for="inputPassword3"
                        class="col-sm-2 col-form-label"
                      >
                        Teléfono
                      </label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          id="inputPassword3"
                          placeholder="Teléfono"
                          onChange={onInputChange}
                          value={formState.inputPassword3}
                        ></input>
                        <p className="mensajeError">
                          {!!formValidation.nombreValid &&
                            formSubmitted &&
                            formValidation.nombreValid}
                        </p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Mensaje</label>
                      <textarea
                        class="form-control"
                        id="area_texto2"
                        rows="4"
                        onChange={onInputChange}
                        value={formState.area_texto2}
                      ></textarea>
                      <p className="mensajeError">
                        {!!formValidation.nombreValid &&
                          formSubmitted &&
                          formValidation.nombreValid}
                      </p>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );



  //esta parte es un cogigo es para si quieren ingresar algun dato con restricciones de todo tipo

  /*
   <form id="formulario">
        <p>ingresa</p>
        <input
        
            class="form-control mb-2"
            name="userName"
            placeholder="Ingrese su nombre"
            autocomplete="off"
            id="userName"
            type="text"
            required
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            title="Solo letras"
            minlength="3"
            maxlength="10"
        />
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <input
            class="form-control mb-2"
            name="userName2"
            placeholder="Ingrese su nombre"
            autocomplete="off"
            id="userName2"
            type="text"
            required
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            title="Solo letras"
            minlength="3"
            maxlength="10"
          
        />
        <input
            class="form-control mb-2"
            name="userName3"
            placeholder="Ingrese su nombre"
            autocomplete="off"
            id="userName3"
            type="text"
            required
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            title="Solo letras"
            minlength="3"
            maxlength="10"
        />   
<input
            class="form-control mb-2"
            name="userEmail"
            placeholder="Ingrese su correo"
            id="userEmail"
            autocomplete="off"
            type="email"
            required
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,15})$"
            title="Ingresa un email válido"
        />

       <div class="form-group">
    <label for="exampleFormControlTextarea1">Area de texto</label>
    <textarea class="form-control" id="area_texto" rows="3"></textarea>
  </div>
        
        <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
    


*/


};

export default Contactos