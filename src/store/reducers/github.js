import * as actionTypes from '../actions';

const initialState = {
  issues: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ISSUES:
      return {
        ...state,
        issues: [...action.value]
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.value
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.value
      };
    default:
      return state;
  }
};

export default reducer;
