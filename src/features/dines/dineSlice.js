import { DINES } from '../../app/shared/DINES';

export const selectAllDines = () => {
 return DINES;
};


export const selectDineById = (id) => {
 return DINES.find((dine) => dine.id === parseInt(id));
};

export const selectFeaturedDine = () => {
 return DINES.find((dine) => dine.featured);
};