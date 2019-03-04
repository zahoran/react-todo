import reducer from './todoList';
import * as actionTypes from '../actions';

describe('todoList reducer', () => {
  const newItems = [
    {id: 'asd1', title: 'item1'},
    {id: 'asd2', title: 'item2'}
  ];
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        items: [
          {id: 'asd1', title: 'item1'},
          {id: 'asd2', title: 'item2'},
          {id: 'asd3', title: 'item3'}
        ]
      }
    );
  });
  it('should update items with the provided new array', () => {
    expect(reducer(undefined,
      {
        type: actionTypes.SET_ITEMS,
        value: newItems
      }))
      .toEqual({items: newItems});
  });
  it('should remove the given item from the items', () => {
    expect(reducer(undefined,
      {type: actionTypes.REMOVE_ITEM, value: 'asd1'})).toEqual({
      items: [
        {id: 'asd2', title: 'item2'},
        {id: 'asd3', title: 'item3'}]
    });
  });
  it('should set the given item to a completed state', () => {
    expect(reducer(undefined,
      {type: actionTypes.TOGGLE_COMPLETE, value: 'asd1'})).toEqual({
      items: [
        {id: 'asd1', title: 'item1', completed: true},
        {id: 'asd2', title: 'item2'},
        {id: 'asd3', title: 'item3'}
      ]
    });
  });
});
