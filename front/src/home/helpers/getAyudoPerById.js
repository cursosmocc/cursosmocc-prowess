import {ayudosper} from '../components/ayudospe/ayudosCP'

export const getAyudoPerById = (id) => {
    const cursop = ayudosper.find(cursop => {
        return cursop.id===id;
    });
    return cursop;
}