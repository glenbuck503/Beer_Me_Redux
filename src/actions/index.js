export const deleteTap = id => ({
  type: 'DELETE_TAP',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTap = (tap) => {
  const { names, brand, alcohol, id } = tap;
  return {
    type: 'ADD_TAP',
    names: names,
    brand: brand,
    alcohol: alcohol,
    id: id
  }
}