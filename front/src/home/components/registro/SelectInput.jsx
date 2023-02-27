import { formValidations } from "../../helpers/getValidation";

const SelectInput = (props) => {
  const { register, name, options, errors, title, getOptions } = props;
  return (
    <div className="form-regist-select">
      <select
        className="form-select"
        name={name}
        {...register(name, { ...formValidations[name] })}
        onChange={getOptions}
      >
        <option value={title}>{title}</option>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.iso2 ? option.iso2 : option.id}>
              {option.name
                ? option?.name.toUpperCase()
                : option?.fullname.toUpperCase()}
            </option>
          ))}
      </select>
      {errors[name] && (
        <span className="mensajeError">
          {console.log(errors[name].message)}
        </span>
      )}
    </div>
  );
};

export default SelectInput;
