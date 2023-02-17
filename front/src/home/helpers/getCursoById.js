import {cursos} from '../components/curso/datosCursos'

export const getCursoById = (id) => {
    const curso = cursos.find(curso => {
        return curso.id===id;
    });
    return curso;
}