import Input from "./Input";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";

const FormPart2 = (props) => {
  const { cities, states, handlePrev, register, errors, getCities } = props;

  return (
    <>
      <p className="form-titulo">2/2 Regístrate</p>
      <SelectInput
        register={register}
        name={"state"}
        options={states}
        title={"Provincia"}
        getOptions={getCities}
        errors={errors}
      />

      <SelectInput
        register={register}
        name={"city"}
        options={cities}
        title={"Ciudad"}
        errors={errors}
      />

      <SelectInput
        register={register}
        name={"age"}
        options={[
          { id: "18", name: "Menos a 18" },
          { id: "25", name: "18 a 25" },
          { id: "35", name: "26 a 35" },
          { id: "45", name: "36 a 45" },
          { id: "100", name: "Mayor a 45" },
        ]}
        title={"Edad"}
        errors={errors}
      />

      <Input
        register={register}
        type={"text"}
        placeholder={"Dirección"}
        name={"address"}
        errors={errors}
        validation={{ required: "Este campo es requerido", minLength: 6 }}
      />

      <Input
        register={register}
        type={"number"}
        placeholder={"Celular"}
        name={"phone1"}
        errors={errors}
        validation={{ required: "Este campo es requerido", minLength: 6 }}
      />
      <SelectInput
        register={register}
        name={"course"}
        options={[
          { id: "A", name: "Categoria A" },
          { id: "B", name: "Categoria B" },
        ]}
        title={"Cursos"}
        errors={errors}
      />

      <SelectInput
        register={register}
        name={"socialmedia"}
        options={[
          { id: "Facebook", name: "Facebook" },
          { id: "Instagram", name: "Instagram" },
          { id: "Anuncio", name: "Anuncio" },
          { id: "Twitter", name: "Twitter" },
          { id: "Volante", name: "Volante" },
          { id: "Youtube", name: "Youtube" },
        ]}
        title={"¿Como se entero?"}
        errors={errors}
      />

      <div className="d-flex gap-4 ps-4">
        <RadioInput
          type={"radio"}
          name={"gender"}
          value={"male"}
          label={"Masculino"}
          register={register}
          errors={errors}
        />
        <RadioInput
          type={"radio"}
          name={"gender"}
          value={"famale"}
          label={"Femenino"}
          register={register}
          errors={errors}
        />
      </div>

      <div className="terms d-flex">
        <RadioInput
          type={"checkbox"}
          name={"terms"}
          label={"He Leído y Acepto los"}
          value={"true"}
          register={register}
          errors={errors}
        />
        <a href="/terminos" target="_blank" rel="noreferrer" className="ms-1">
          Términos y Condiciones
        </a>
      </div>
      <div className="d-flex justify-content-between">
        <div className="form-boton ">
          <button type="button" onClick={handlePrev}>
            Atras
          </button>
        </div>
        <div className="form-boton ">
          <button type="Submit">Registrar</button>
        </div>
      </div>
    </>
  );
};

export default FormPart2;
