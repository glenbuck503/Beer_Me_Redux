import * as c from './ActionTypes';

export const deleteTap = id => ({
  type: c.DELETE_TAP,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTap = (tap) => {
  const { names, brand, alcohol, pint, id } = tap;
  return {
    type: c.ADD_TAP,
    names: names,
    brand: brand,
    alcohol: alcohol,
    pint: pint,
    id: id
  }
};