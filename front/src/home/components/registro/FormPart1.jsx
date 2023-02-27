import Input from "./Input";
import SelectInput from "./SelectInput";

const FormPart1 = (props) => {
  const {
    handleNext,
    countries,
    getStates,
    register,
    errors,
    handleSubmit,
    correctPassword,
    correctIdNumber,
  } = props;

  return (
    <>
      <p className="form-titulo">1/2 Regístrate</p>

      <Input
        register={register}
        type={"text"}
        placeholder={"Nombres"}
        name={"firstname"}
        errors={errors}
      />
      <Input
        register={register}
        type={"text"}
        placeholder={"Apellidos"}
        name={"lastname"}
        errors={errors}
      />
      <Input
        register={register}
        type={"text"}
        placeholder={"Nombre de Usuario"}
        name={"username"}
        errors={errors}
      />
      <Input
        register={register}
        type={"email"}
        placeholder={"Correo Electrónico"}
        name={"email"}
        errors={errors}
      />
      <Input
        register={register}
        type={"number"}
        placeholder={"Cédula"}
        name={"idnumber"}
        errors={errors}
      />
      {correctIdNumber || (
        <span className="mensajeError">
          <p>Número de cédula no válido</p>
        </span>
      )}
      <Input
        register={register}
        type={"password"}
        placeholder={"Contraseña"}
        name={"password"}
        errors={errors}
      />
      <Input
        register={register}
        type={"password"}
        placeholder={"Repetir Contraseña"}
        name={"password2"}
        errors={errors}
      />
      {correctPassword || (
        <span className="mensajeError">
          <p>Las Contraseñas no coinciden</p>
        </span>
      )}

      <SelectInput
        register={register}
        name={"country"}
        options={countries}
        title={"Pais"}
        getOptions={getStates}
        errors={errors}
      />
      <div className="form-boton d-flex justify-content-end ">
        <button type="button" onClick={handleSubmit(handleNext)}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default FormPart1;
