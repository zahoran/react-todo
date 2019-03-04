import * as actionTypes from '../actions';

const initialState = {
  items: [
    {id: 'asd1', title: 'item1'},
    {id: 'asd2', title: 'item2'},
    {id: 'asd3', title: 'item3'}
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        items: [...action.value]
      };
    case actionTypes.ADD_ITEM:
      const result = state.items.filter((item) => {
        return item.title === action.value;
      });
      if (!result.length) {
        return {
          ...state,
          items: state.items.concat({
            title: action.value,
            completed: false,
            id: new Date()
          })
        };
      }
      return {
        ...state
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items:
          state.items.filter(function (el) {
            return el.id !== action.value;
          })
      };
    case actionTypes.TOGGLE_COMPLETE:
      return {
        ...state,
        items:
          state.items.map(function (el) {
            if (el.id === action.value) {
              el.completed = !el.completed
            }
            return el;
          })
      };
    default:
      return state;
  }
};

export default reducer;
