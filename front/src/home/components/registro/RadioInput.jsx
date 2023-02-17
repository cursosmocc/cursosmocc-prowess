const RadioInput = ({ name, label, value, register, type }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input pe-auto"
        type={type}
        id={value}
        value={value}
        {...register(name)}
      />
      <label className="form-check-label" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
