import { formValidations } from "../../helpers/getValidation";

const Input = ({ name, register, errors, placeholder, type }) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...register(name, { ...formValidations[name] })}
        className="form-control"
      />
      <label htmlFor={name} className="ms-2">
        {placeholder}
      </label>
      {errors[name] && (
        <span className="mensajeError">{errors[name].message}</span>
      )}
    </div>
  );
};

export default Input;
