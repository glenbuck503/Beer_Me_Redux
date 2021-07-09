import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
  let action;
  const currentState = {
    1: {names: 'corona',
    brand: 'extra1',
    alcohol: '2',
    id: 1 },
    2: {names: 'corona',
    brand: 'extra2',
    alcohol: '3',
    id: 2 }
  }
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });


  test('Should successfully add new tap data to masterTapList', () => {
    const { names, brand, alcohol, id } = tapData;
    action = {
      type: 'ADD_TAP',
      names: names,
      brand: brand,
      alcohol: alcohol,
      id: id
    };

    expect(tapListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        brand: brand,
        alcohol: alcohol,
        id: id
      }
    });

    test('Should successfully delete a tap', () => {
      action = {
        type: 'DELETE_TAP',
        id: 1
      };
      expect(tapListReducer(currentState, action)).toEqual({
        2: {names: 'corona',
          brand: 'extra2',
          alcohol: '3',
          id: 2 }
      });
    });
  });
});