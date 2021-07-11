import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {

  const currentState = {
    1: {names: 'test',
    brand: 'tester1',
    alcohol: 'testerAlcohol',
    id: 1 },
    2: {names: 'test2',
    brand: 'tester2',
    alcohol: 'tester2Alcohol',
    id: 2 }
  }
  let action;
  const tapData = {
    names: 'extra',
    brand: 'corona',
    alochol: 'test alcohol',
    id: 1
  };
  
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
        alochol: alcohol,
        id: id
      }
    });
  });

  test('Should successfully delete a tap', () => {
    action = {
      type: 'DELETE_TAP',
      id: 1
    };
    expect(tapListReducer(currentState, action)).toEqual({
      2: {names: 'test2',
        brand: 'tester2',
        alcohol: 'tester2Alcohol',
        id: 2 }
    });
  });

  });
