import React, { useEffect, useState, useCallback } from "react";
import ListCurso from "../components/curso/ListCurso";
import "./style.css";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import { getCourses } from "../../services/backend-api";
import Loading from "../components/loader/Loading";

const CursosPage = () => {
  const { tipos } = useParams();
  const [titulo, settitulo] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const _getCourses = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCourses();
      response.shift();
      setCourses(response);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    settitulo(tipos === "general" ? "GENERALES" : "PERSONALIZADOS");
    _getCourses();
  }, [tipos, _getCourses]);

  if (loading) return <Loading />;

  if (error) return <h1>Error</h1>;

  return (
    <>
      <div className="container-md container-cursos mb-5">
        <h1 className="text-center mt-5 title-curso">CURSOS {titulo}</h1>
        <p className="text-center mb-5 descripcion-curso">
          Cursos completamente gratuitos en modalidad virtual para emprendedores
        </p>
        <ListCurso tipos={tipos} courses={courses} />
      </div>
      <Footer />
    </>
  );
};

export default CursosPage;
