import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Contenido from "../components/detalle curso/Contenido";
import { getCourse } from "../../services/backend-api";
import Loading from "../components/loader/Loading";

const CursoPage = () => {
  const [curso, setCurso] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const _getCourse = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCourse(id);
      if (response.length === 0) {
        setError(true);
        return;
      }
      setCurso(response[0]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    _getCourse();
  }, [_getCourse]);

  if (loading) return <Loading />;

  if (error) return <h1>Error</h1>;

  return <Contenido curso={curso} />;
};

export default CursoPage;
