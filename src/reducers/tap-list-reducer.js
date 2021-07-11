export default (state = {}, action) => {
  const { names, brand, alcohol, id } = action;
  switch (action.type) {
  case 'ADD_TAP':
    return Object.assign({}, state, {
      [id]: {
        names: names,
        brand: brand,
        alcohol: alcohol,
        id: id
      }
    });
    case 'DELETE_TAP':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
    }
  };