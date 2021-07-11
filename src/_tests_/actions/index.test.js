import * as actions from './../../actions';

describe('Beer Me actions', () => {
  it('deleteTap should create DELETE_TAP action', () => {
    expect(actions.deleteTap(1)).toEqual({
      type: 'DELETE_TAP',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addTap should create ADD_TAP action', () => {
    expect(actions.addTap({names: 'actionTest', brand: 'action', alcohol: 'actionAlcohol', id: 1})).toEqual({
      type: 'ADD_TAP',
      names: 'actionTest',
      brand: 'action',
      alcohol: 'actionAlcohol',
      id: 1
    });
  });
});