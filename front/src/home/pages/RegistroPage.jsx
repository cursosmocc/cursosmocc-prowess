import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getCiudad, getPais, getProvincia } from "../../services/getPais";
import { postUser } from "../../services/backend-api";
import FormPart1 from "../components/registro/FormPart1";
import FormPart2 from "../components/registro/FormPart2";
import { validarCedula } from "../helpers/getValidation";
import ModalError from "../components/registro/ModalError";

function RegistroPage() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("");
  const [success, setSuccess] = useState(true);
  const [warnings, setWarnings] = useState([]);
  const [correctPassword, setCorrectPassword] = useState(true);
  const [correctIdNumber, setCorrectIdNumber] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCountries = async () => {
    const { data } = await getPais();
    setCountries(data);
  };

  const getStates = async (e) => {
    const data = await getProvincia(e.target.value);
    setStates(data);
    setCountry(e.target.value);
  };

  const getCities = async (e) => {
    const data = await getCiudad(country, e.target.value);
    setCities(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleNext = ({ password, password2, idnumber }) => {
    if (password === password2 && validarCedula(idnumber)) {
      setCorrectPassword(true);
      setCorrectIdNumber(true);
      setPage((prevPage) => prevPage + 1);
    } else {
      setCorrectPassword(false);
      setCorrectIdNumber(false);
    }
  };

  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const onSubmit = async (data) => {
    const user = {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      city: data.city,
      country: data.country,
      password: data.password,
    };
    const response = await postUser(user);

    if (response.success) navigate("/register/success");
    else {
      setSuccess(false);
      setWarnings(response.warnings);
    }
  };

  return (
    <>
      <div className="contenedor flex-column flex-lg-row ">
        <div className="col-12 col-lg-6 image-form w-lg-100">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622658/modulomocc/home/inscrip.jpg"
            alt="inscripcion"
          />
        </div>
        <div className="col-12 col-lg-6">
          <form
            className="row needs-validation form g-3"
            id="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {page === 1 && (
              <FormPart1
                register={register}
                countries={countries}
                handleNext={handleSubmit(handleNext)}
                getStates={getStates}
                errors={errors}
                handleSubmit={handleSubmit}
                correctPassword={correctPassword}
                correctIdNumber={correctIdNumber}
              />
            )}
            {page === 2 && (
              <>
                {success || (
                  <ModalError warnings={warnings} setSuccess={setSuccess} />
                )}
                <FormPart2
                  getCities={getCities}
                  cities={cities}
                  states={states}
                  handlePrev={handlePrev}
                  register={register}
                  errors={errors}
                />
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistroPage;
