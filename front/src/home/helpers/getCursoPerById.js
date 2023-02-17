import {cursosper} from '../components/cursospe/datosCP'

export const getCursoPerById = (id) => {
    const cursop = cursosper.find(cursop => {
        return cursop.id===id;
    });
    return cursop;
}