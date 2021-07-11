import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
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



  });
