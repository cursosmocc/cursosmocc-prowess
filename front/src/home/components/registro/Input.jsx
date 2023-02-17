import { formValidations } from "../../helpers/getValidation";

const Input = ({ name, register, errors, placeholder, type }) => {
  return (
    <div className="form-input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, { ...formValidations[name] })}
        className="form-control"
      />
      {errors[name] && (
        <span className="mensajeError">{errors[name].message}</span>
      )}
    </div>
  );
};

export default Input;
