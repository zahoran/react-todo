import reducer from './github';
import * as actionTypes from '../actions';

describe('github reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        issues: [],
        loading: false,
        error: null
      }
    );
  });
  it('should update the issues list with the provided new one', () => {
    expect(reducer(undefined,
      {
        type: actionTypes.SET_ISSUES,
        value: [{title: 'first'}, {title: 'second'}]
      }))
      .toEqual(
        {
          loading: false,
          error: null,
          issues: [{title: 'first'}, {title: 'second'}]
        });
  });
});
