const CheckboxInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        value="option1"
      />
      <label class="form-check-label" for="inlineCheckbox1">
        1
      </label>
    </div>
  );
};

export default CheckboxInput;
