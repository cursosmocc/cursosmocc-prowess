import { formValidations } from "../../helpers/getValidation";

const RadioInput = ({ name, label, value, register, type, errors }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input pe-auto"
        type={type}
        id={value}
        value={value}
        {...register(name, { ...formValidations[name] })}
      />

      <label className="form-check-label" htmlFor={value}>
        {label}
      </label>
      {name === "terms" && (
        <a href="/terminos" target="_blank" rel="noreferrer" className="ms-1">
          Términos y Condiciones
        </a>
      )}
      {errors[name] && (
        <span className="mensajeError">
          <br />
          {console.log(errors[name].message)}
        </span>
      )}
    </div>
  );
};

export default RadioInput;
