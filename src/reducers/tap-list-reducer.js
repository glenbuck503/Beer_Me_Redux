import * as c from './../actions/ActionTypes'

export default (state = {}, action) => {
  const { names, brand, alcohol, pint, id } = action;
  switch (action.type) {
  case c.ADD_TAP:
    console.log(pint)
    return Object.assign({}, state, {
      [id]: {
        names: names,
        brand: brand,
        alcohol: alcohol,
        pint: pint,
        id: id
      }
    });
  case c.DELETE_TAP:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};