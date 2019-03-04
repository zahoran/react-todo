import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoItems from './TodoItems';
import TodoItem from './TodoItem/TodoItem';

configure({adapter: new Adapter()});

describe('<TodoItems />', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<TodoItems />);
  });

  it('should contain zero items without any inputs provided', () => {
    expect(wrapper.find(TodoItem)).toHaveLength(0);
  });

  it('should contain as many TodoItems, as many items the input list have', () => {
    const items = [{title: 'item1'}, {title: 'item2'}];
    wrapper.setProps({items: items});
    expect(wrapper.find(TodoItem)).toHaveLength(2);
  });
});
