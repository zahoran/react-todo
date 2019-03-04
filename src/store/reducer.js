const initialState = {
  todoItems: [
    {id: 'asd1', title: 'item1'},
    {id: 'asd2', title: 'item2'},
    {id: 'asd3', title: 'item3'}
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todoItems: state.todoItems.concat({
          title: action.value,
          completed: false,
          id: new Date()
        })
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        todoItems:
          state.todoItems.filter(function (el) {
            return el.id !== action.value;
          })
      };
  }
  return state;
};

export default reducer;
