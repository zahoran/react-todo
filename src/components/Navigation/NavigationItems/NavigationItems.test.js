import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import {NavLink} from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  it('should have 2 navigation items', () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
});
